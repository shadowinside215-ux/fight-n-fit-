import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      offers: {
        new_member: { title: "Special Offer's", subtitle: "One time offer's" },
        annual: { title: 'Special Offer', subtitle: 'Musculation + Discipline of Choice' },
        student: { title: 'Box Ladies', subtitle: 'Women only' }
      },
      nav: {
        home: 'Home',
        about: 'About',
        programs: 'Programs',
        schedule: 'Schedule',
        contact: 'Contact',
        join: 'Join Now'
      },
      hero: {
        title: 'Train Like a Fighter. Become Unstoppable.',
        subtitle: 'Professional coaching in a friendly atmosphere. Perfect for beginners and fighters alike.',
        cta: 'Start Training'
      },
      about: {
        title: 'About FIGHT N\' FIT',
        description: 'FIGHT N\' FIT is a high-quality martial arts and fitness center in Sala Al Jadida. We are known for discipline, strength, and real fighting skills. Our experienced coaches provide a supportive environment focused on both physical and mental growth.',
        features: {
          coaching: 'Professional Coaching',
          atmosphere: 'Friendly Atmosphere',
          growth: 'Mental & Physical Growth'
        }
      },
      programs: {
        title: 'Our Programs',
        boxing: {
          name: 'Boxing',
          desc: 'Master the sweet science with professional technical training.',
          level: 'All Levels'
        },
        kickboxing: {
          name: 'Kickboxing / Muay Thai',
          desc: 'The art of eight limbs. Power, speed, and precision.',
          level: 'Beginner - Advanced'
        },
        mma: {
          name: 'MMA',
          desc: 'Comprehensive mixed martial arts training for the modern fighter.',
          level: 'Intermediate - Advanced'
        },
        fitness: {
          name: 'Fitness & Conditioning',
          desc: 'High-intensity workouts to build strength and endurance.',
          level: 'All Levels'
        }
      },
      schedule: {
        title: 'Weekly Schedule',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
        sun: 'Sunday',
        morning: 'Morning Session',
        afternoon: 'Afternoon Session',
        evening: 'Evening Session'
      },
      testimonials: {
        title: 'What Our Fighters Say',
        review1: 'Excellent environment and friendly instructors. Best place to train!',
        review2: 'Perfect gym to learn fighting. The discipline here is top-notch.',
        rating: '4.4/5 based on real reviews'
      },
      contact: {
        title: 'Get In Touch',
        address: 'Av. Abderrahim Bouabid, Sala Al Jadida 11100',
        phone: '06 61 53 08 57',
        call: 'Call Now',
        directions: 'Get Directions',
        whatsapp: 'Chat on WhatsApp'
      },
      cta: {
        title: 'Ready to become stronger?',
        button: 'Join FIGHT N\' FIT today'
      }
    }
  },
  fr: {
    translation: {
      offers: {
        new_member: { title: "Offres Spéciales", subtitle: "Offres à durée limitée" },
        annual: { title: 'Offre Spéciale', subtitle: 'Musculation + Discipline au Choix' },
        student: { title: 'Box Ladies', subtitle: 'Exclusivement femmes' }
      },
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        programs: 'Programmes',
        schedule: 'Planning',
        contact: 'Contact',
        join: 'Rejoindre'
      },
      hero: {
        title: 'Entraînez-vous comme un combattant. Devenez inarrêtable.',
        subtitle: 'Coaching professionnel dans une ambiance conviviale. Parfait pour les débutants et les combattants.',
        cta: 'Commencer l\'entraînement'
      },
      about: {
        title: 'À Propos de FIGHT N\' FIT',
        description: 'FIGHT N\' FIT est un centre d\'arts martiaux et de fitness de haute qualité à Sala Al Jadida. Nous sommes reconnus pour notre discipline, notre force et nos réelles compétences de combat. Nos coachs expérimentés offrent un environnement de soutien axé sur la croissance physique et mentale.',
        features: {
          coaching: 'Coaching Professionnel',
          atmosphere: 'Ambiance Conviviale',
          growth: 'Croissance Mentale et Physique'
        }
      },
      programs: {
        title: 'Nos Programmes',
        boxing: {
          name: 'Boxe',
          desc: 'Maîtrisez le "noble art" avec un entraînement technique professionnel.',
          level: 'Tous Niveaux'
        },
        kickboxing: {
          name: 'Kickboxing / Muay Thai',
          desc: 'L\'art des huit membres. Puissance, vitesse et précision.',
          level: 'Débutant - Avancé'
        },
        mma: {
          name: 'MMA',
          desc: 'Entraînement complet aux arts martiaux mixtes pour le combattant moderne.',
          level: 'Intermédiaire - Avancé'
        },
        fitness: {
          name: 'Fitness & Conditionnement',
          desc: 'Séances de haute intensité pour développer force et endurance.',
          level: 'Tous Niveaux'
        }
      },
      schedule: {
        title: 'Planning Hebdomadaire',
        mon: 'Lundi',
        tue: 'Mardi',
        wed: 'Mercredi',
        thu: 'Jeudi',
        fri: 'Vendredi',
        sat: 'Samedi',
        sun: 'Dimanche',
        morning: 'Session Matin',
        afternoon: 'Session Après-midi',
        evening: 'Session Soir'
      },
      testimonials: {
        title: 'Ce que disent nos combattants',
        review1: 'Excellent environnement et instructeurs sympathiques. Le meilleur endroit pour s\'entraîner !',
        review2: 'Salle parfaite pour apprendre à combattre. La discipline ici est au top.',
        rating: '4.4/5 basé sur des avis réels'
      },
      contact: {
        title: 'Contactez-nous',
        address: 'Av. Abderrahim Bouabid, Sala Al Jadida 11100',
        phone: '06 61 53 08 57',
        call: 'Appeler',
        directions: 'Itinéraire',
        whatsapp: 'WhatsApp'
      },
      cta: {
        title: 'Prêt à devenir plus fort ?',
        button: 'Rejoignez FIGHT N\' FIT aujourd\'hui'
      }
    }
  },
  ar: {
    translation: {
      offers: {
        new_member: { title: "عروض خاصة", subtitle: "عروض لمرة واحدة" },
        annual: { title: 'عرض خاص', subtitle: 'كمال الأجسام + تخصص من اختيارك' },
        student: { title: 'Box Ladies', subtitle: 'للسيدات فقط' }
      },
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        programs: 'البرامج',
        schedule: 'الجدول',
        contact: 'اتصل بنا',
        join: 'انضم الآن'
      },
      hero: {
        title: 'تدرب كمقاتل. كن لا يقهر.',
        subtitle: 'تدريب احترافي في أجواء ودية. مثالي للمبتدئين والمقاتلين على حد سواء.',
        cta: 'ابدأ التدريب'
      },
      about: {
        title: 'حول FIGHT N\' FIT',
        description: 'FIGHT N\' FIT هو مركز عالي الجودة للفنون القتالية واللياقة البدنية في سلا الجديدة. نحن معروفون بالانضباط والقوة ومهارات القتال الحقيقية. يوفر مدربونا ذوو الخبرة بيئة داعمة تركز على النمو البدني والعقلي.',
        features: {
          coaching: 'تدريب احترافي',
          atmosphere: 'أجواء ودية',
          growth: 'نمو عقلي وبدني'
        }
      },
      programs: {
        title: 'برامجنا',
        boxing: {
          name: 'الملاكمة',
          desc: 'أتقن "الفن النبيل" مع تدريب تقني احترافي.',
          level: 'جميع المستويات'
        },
        kickboxing: {
          name: 'الكيك بوكسينغ / المواي تاي',
          desc: 'فن الأطراف الثمانية. قوة، سرعة ودقة.',
          level: 'مبتدئ - متقدم'
        },
        mma: {
          name: 'الفنون القتالية المختلطة',
          desc: 'تدريب شامل على الفنون القتالية المختلطة للمقاتل الحديث.',
          level: 'متوسط - متقدم'
        },
        fitness: {
          name: 'اللياقة البدنية والتحمل',
          desc: 'تمارين عالية الكثافة لبناء القوة والتحمل.',
          level: 'جميع المستويات'
        }
      },
      schedule: {
        title: 'الجدول الأسبوعي',
        mon: 'الإثنين',
        tue: 'الثلاثاء',
        wed: 'الأربعاء',
        thu: 'الخميس',
        fri: 'الجمعة',
        sat: 'السبت',
        sun: 'الأحد',
        morning: 'حصة الصباح',
        afternoon: 'حصة بعد الزوال',
        evening: 'حصة المساء'
      },
      testimonials: {
        title: 'ماذا يقول مقاتلونا',
        review1: 'بيئة ممتازة ومدربون ودودون. أفضل مكان للتدريب!',
        review2: 'صالة مثالية لتعلم القتال. الانضباط هنا في القمة.',
        rating: '4.4/5 بناءً على مراجعات حقيقية'
      },
      contact: {
        title: 'تواصل معنا',
        address: 'شارع عبد الرحيم بوعبيد، سلا الجديدة 11100',
        phone: '06 61 53 08 57',
        call: 'اتصل الآن',
        directions: 'الاتجاهات',
        whatsapp: 'واتساب'
      },
      cta: {
        title: 'هل أنت مستعد لتصبح أقوى؟',
        button: 'انضم إلى FIGHT N\' FIT اليوم'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
