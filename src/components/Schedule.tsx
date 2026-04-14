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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Timing
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">{t('schedule.title')}</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-[12px] p-8 shadow-2xl"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border">
                  <TableHead className="w-[100px] text-[11px] text-muted-foreground uppercase pb-4">Time</TableHead>
                  {days.map((day) => (
                    <TableHead key={day} className="text-[11px] text-muted-foreground uppercase pb-4 text-center">
                      {day}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.map((session, i) => (
                  <TableRow key={i} className="border-border hover:bg-white/5 transition-colors">
                    <TableCell className="text-primary font-semibold text-[13px] py-4">{session.time.split(' - ')[0]}</TableCell>
                    {session.classes.map((cls, j) => (
                      <TableCell key={j} className="text-center py-4 text-[13px]">
                        <span className={cls === 'Closed' ? 'text-muted-foreground/50' : 'text-white'}>
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
