import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Schedule = () => {
  const { t } = useTranslation();

  const days = [
    t('schedule.mon'),
    t('schedule.tue'),
    t('schedule.wed'),
    t('schedule.thu'),
    t('schedule.fri'),
    t('schedule.sat'),
  ];

  const sessions = [
    { time: '09:00 - 10:30', classes: ['Boxing', 'Fitness', 'Boxing', 'Fitness', 'Boxing', 'Open Mat'] },
    { time: '11:00 - 12:30', classes: ['MMA', 'Kickboxing', 'MMA', 'Kickboxing', 'MMA', 'Open Mat'] },
    { time: '17:00 - 18:30', classes: ['Kickboxing', 'Boxing', 'Kickboxing', 'Boxing', 'Kickboxing', 'MMA'] },
    { time: '19:00 - 20:30', classes: ['Boxing', 'MMA', 'Boxing', 'MMA', 'Boxing', 'Fitness'] },
    { time: '20:30 - 22:00', classes: ['Fitness', 'Kickboxing', 'Fitness', 'Kickboxing', 'Fitness', 'Closed'] },
  ];

  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 px-6">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block text-glow">
            Timing
          </span>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
            {t('schedule.title')}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto bg-gold-glow" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary border border-white/5 rounded-none p-4 sm:p-10 shadow-2xl border-gold-glow relative group"
        >
          <div className="overflow-x-auto overflow-y-hidden pb-4">
            <Table className="min-w-[800px]">
              <TableHeader>
                <TableRow className="hover:bg-transparent border-white/5">
                  <TableHead className="w-[120px] text-[10px] text-white/40 uppercase font-black tracking-widest pb-6">Session</TableHead>
                  {days.map((day) => (
                    <TableHead key={day} className="text-[10px] text-white/40 uppercase font-black tracking-widest pb-6 text-center">
                      {day}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.map((session, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-all duration-300">
                    <TableCell className="text-primary font-black text-[12px] py-6 text-glow uppercase tracking-tighter">{session.time}</TableCell>
                    {session.classes.map((cls, j) => (
                      <TableCell key={j} className="text-center py-6">
                        <span className={`text-[12px] font-black uppercase tracking-tighter ${cls === 'Closed' || cls === 'Open Mat' ? 'text-white/20' : 'text-white text-glow'}`}>
                          {cls}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
        
        <p className="mt-8 text-center text-white/40 text-sm font-medium italic">
          * Schedule subject to change. Private sessions available upon request.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
