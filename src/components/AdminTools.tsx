import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { auth, googleProvider, signInWithPopup, signOut, db, doc, setDoc } from '../firebase';
import { Button } from '../../components/ui/button';
import { Upload, X, LogIn, LogOut, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageUploaderProps {
  settingKey: string;
  label: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ settingKey, label }) => {
  const { isAdmin } = useApp();
  const [uploading, setUploading] = useState(false);

  if (!isAdmin) return null;

  const handleUpload = async () => {
    const cloudName = (import.meta as any).env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = (import.meta as any).env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      alert('Cloudinary not configured. Please add VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET to your environment.');
      return;
    }

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (!file) return;

      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: 'POST', body: formData }
        );
        const data = await response.json();
        
        if (data.secure_url) {
          await setDoc(doc(db, 'settings', 'global'), {
            [settingKey]: data.secure_url
          }, { merge: true });
        }
      } catch (error) {
        console.error('Upload failed:', error);
      } finally {
        setUploading(false);
      }
    };
    input.click();
  };

  return (
    <div className="absolute top-2 right-2 z-40">
      <Button 
        size="sm" 
        onClick={handleUpload} 
        disabled={uploading}
        className="bg-primary text-black hover:bg-primary/80 h-8 px-3 rounded-full shadow-lg"
      >
        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
        <span className="text-[10px] font-bold uppercase">{label}</span>
      </Button>
    </div>
  );
};

export const AdminLogin = () => {
  const { user, isAdmin } = useApp();
  const [showLogin, setShowLogin] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setShowLogin(true);
    window.addEventListener('open-admin-login', handleOpen);
    return () => window.removeEventListener('open-admin-login', handleOpen);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowLogin(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <AnimatePresence>
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card border border-border p-8 rounded-xl max-w-sm w-full relative"
          >
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">Admin Access</h2>
            {user ? (
              <div className="space-y-4">
                <p className="text-muted-foreground">Logged in as: <span className="text-white font-bold">{user.email}</span></p>
                {isAdmin ? (
                  <p className="text-primary font-bold uppercase text-sm tracking-widest">✓ Admin Access Granted</p>
                ) : (
                  <p className="text-red-500 font-bold uppercase text-sm tracking-widest">✗ Not an Admin</p>
                )}
                <Button onClick={handleLogout} variant="outline" className="w-full">
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin} className="w-full bg-primary text-black font-bold">
                <LogIn className="w-4 h-4 mr-2" /> Login with Google
              </Button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
