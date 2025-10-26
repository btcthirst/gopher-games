import React, { useState, useEffect } from 'react';
import { Trophy, Star, Target, Zap, Award, CheckCircle, Circle, Lock } from 'lucide-react';

const GolangLearningPath = () => {
  const [completedLevels, setCompletedLevels] = useState(() => {
    const saved = localStorage.getItem('golangProgress');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [totalXP, setTotalXP] = useState(() => {
    const saved = localStorage.getItem('golangXP');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('golangProgress', JSON.stringify(completedLevels));
  }, [completedLevels]);

  useEffect(() => {
    localStorage.setItem('golangXP', totalXP.toString());
  }, [totalXP]);

  const levels = [
    {
      id: 1,
      title: "🎮 Рівень 1: Новачок",
      subtitle: "Перші кроки у світі Go",
      xp: 500,
      color: "bg-green-500",
      tasks: [
        { id: "1-1", name: "Встановити Go та налаштувати IDE", xp: 50, type: "setup" },
        { id: "1-2", name: "Hello World - перша програма", xp: 50, type: "code" },
        { id: "1-3", name: "Змінні та типи даних", xp: 100, type: "theory" },
        { id: "1-4", name: "Оператори та вирази", xp: 100, type: "theory" },
        { id: "1-5", name: "Умови (if/else, switch)", xp: 100, type: "code" },
        { id: "1-6", name: "Цикли (for, range)", xp: 100, type: "code" },
      ],
      challenge: "Створити калькулятор у терміналі",
      bonus: 100
    },
    {
      id: 2,
      title: "⚔️ Рівень 2: Учень",
      subtitle: "Основи програмування",
      xp: 800,
      color: "bg-blue-500",
      tasks: [
        { id: "2-1", name: "Функції та параметри", xp: 100, type: "theory" },
        { id: "2-2", name: "Множинне повернення значень", xp: 100, type: "code" },
        { id: "2-3", name: "Масиви та слайси", xp: 150, type: "theory" },
        { id: "2-4", name: "Мапи (maps)", xp: 150, type: "theory" },
        { id: "2-5", name: "Структури (structs)", xp: 150, type: "code" },
        { id: "2-6", name: "Методи", xp: 150, type: "code" },
      ],
      challenge: "Система управління студентами (CRUD)",
      bonus: 150
    },
    {
      id: 3,
      title: "🛡️ Рівень 3: Майстер",
      subtitle: "Поглиблене вивчення",
      xp: 1200,
      color: "bg-purple-500",
      tasks: [
        { id: "3-1", name: "Інтерфейси", xp: 200, type: "theory" },
        { id: "3-2", name: "Обробка помилок", xp: 150, type: "code" },
        { id: "3-3", name: "Пакети та модулі", xp: 200, type: "theory" },
        { id: "3-4", name: "Покажчики", xp: 150, type: "theory" },
        { id: "3-5", name: "Defer, panic, recover", xp: 200, type: "code" },
        { id: "3-6", name: "Тестування (testing)", xp: 300, type: "code" },
      ],
      challenge: "REST API для Todo-додатку з тестами",
      bonus: 200
    },
    {
      id: 4,
      title: "🔥 Рівень 4: Експерт",
      subtitle: "Конкурентність та продуктивність",
      xp: 1500,
      color: "bg-orange-500",
      tasks: [
        { id: "4-1", name: "Горутини (goroutines)", xp: 250, type: "theory" },
        { id: "4-2", name: "Канали (channels)", xp: 250, type: "code" },
        { id: "4-3", name: "Select statement", xp: 200, type: "code" },
        { id: "4-4", name: "Sync пакет (Mutex, WaitGroup)", xp: 250, type: "theory" },
        { id: "4-5", name: "Context для контролю горутин", xp: 250, type: "code" },
        { id: "4-6", name: "Паттерни конкурентності", xp: 300, type: "code" },
      ],
      challenge: "Веб-краулер з конкурентною обробкою",
      bonus: 300
    },
    {
      id: 5,
      title: "🌟 Рівень 5: Архітектор",
      subtitle: "Веб-розробка та бази даних",
      xp: 2000,
      color: "bg-red-500",
      tasks: [
        { id: "5-1", name: "HTTP сервер (net/http)", xp: 300, type: "code" },
        { id: "5-2", name: "Роутинг та мідлвари", xp: 300, type: "code" },
        { id: "5-3", name: "Робота з JSON", xp: 200, type: "theory" },
        { id: "5-4", name: "SQL та database/sql", xp: 300, type: "code" },
        { id: "5-5", name: "ORM (GORM)", xp: 300, type: "code" },
        { id: "5-6", name: "Міграції БД", xp: 200, type: "code" },
        { id: "5-7", name: "JWT автентифікація", xp: 400, type: "code" },
      ],
      challenge: "Повноцінний блог з авторизацією та БД",
      bonus: 400
    },
    {
      id: 6,
      title: "👑 Рівень 6: Легенда",
      subtitle: "Просунуті теми",
      xp: 2500,
      color: "bg-yellow-500",
      tasks: [
        { id: "6-1", name: "Рефлексія (reflection)", xp: 300, type: "theory" },
        { id: "6-2", name: "Generics (дженеріки)", xp: 300, type: "code" },
        { id: "6-3", name: "Профілювання та оптимізація", xp: 400, type: "code" },
        { id: "6-4", name: "gRPC та Protocol Buffers", xp: 400, type: "code" },
        { id: "6-5", name: "Мікросервіси", xp: 500, type: "theory" },
        { id: "6-6", name: "Docker та контейнеризація", xp: 300, type: "setup" },
        { id: "6-7", name: "CI/CD для Go проєктів", xp: 300, type: "setup" },
      ],
      challenge: "Мікросервісна архітектура з 3+ сервісів",
      bonus: 500
    },
    {
      id: 7,
      title: "💎 Рівень 7: Гранд-Майстер",
      subtitle: "Production-ready розробка",
      xp: 3000,
      color: "bg-indigo-600",
      tasks: [
        { id: "7-1", name: "Логування та моніторинг", xp: 400, type: "code" },
        { id: "7-2", name: "Розподілені системи", xp: 500, type: "theory" },
        { id: "7-3", name: "Message queues (RabbitMQ/Kafka)", xp: 500, type: "code" },
        { id: "7-4", name: "Кешування (Redis)", xp: 400, type: "code" },
        { id: "7-5", name: "WebSockets та real-time", xp: 400, type: "code" },
        { id: "7-6", name: "Безпека та best practices", xp: 400, type: "theory" },
        { id: "7-7", name: "Kubernetes для Go додатків", xp: 400, type: "setup" },
      ],
      challenge: "Production-ready додаток з повним стеком технологій",
      bonus: 1000
    }
  ];

  const achievements = [
    { name: "Перший крок", condition: totalXP >= 50, icon: "🎯" },
    { name: "Код-ніндзя", condition: totalXP >= 500, icon: "🥷" },
    { name: "Go-гуру", condition: totalXP >= 2000, icon: "🧙‍♂️" },
    { name: "Архітектор", condition: totalXP >= 5000, icon: "🏗️" },
    { name: "Легенда", condition: totalXP >= 10000, icon: "👑" },
  ];

  const toggleTask = (taskId, xpValue) => {
    setCompletedLevels(prev => {
      const isCompleted = prev[taskId];
      const newState = { ...prev, [taskId]: !isCompleted };
      
      if (!isCompleted) {
        setTotalXP(current => current + xpValue);
      } else {
        setTotalXP(current => Math.max(0, current - xpValue));
      }
      
      return newState;
    });
  };

  const resetProgress = () => {
    if (window.confirm('Ви впевнені, що хочете скинути весь прогрес?')) {
      setCompletedLevels({});
      setTotalXP(0);
      localStorage.removeItem('golangProgress');
      localStorage.removeItem('golangXP');
    }
  };

  const getTaskIcon = (type) => {
    switch(type) {
      case 'setup': return '⚙️';
      case 'code': return '💻';
      case 'theory': return '📚';
      default: return '📝';
    }
  };

  const getLevelProgress = (level) => {
    const completed = level.tasks.filter(t => completedLevels[t.id]).length;
    const total = level.tasks.length;
    return { completed, total, percentage: (completed / total) * 100 };
  };

  const isLevelUnlocked = (levelId) => {
    if (levelId === 1) return true;
    const prevLevel = levels.find(l => l.id === levelId - 1);
    const progress = getLevelProgress(prevLevel);
    return progress.percentage === 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            🎮 Golang Learning Quest
          </h1>
          <p className="text-xl text-gray-300">Від новачка до профі через гейміфікацію</p>
        </div>

        {/* XP Bar */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Zap className="text-yellow-400" size={32} />
              <div>
                <div className="text-2xl font-bold">{totalXP} XP</div>
                <div className="text-sm text-gray-400">Загальний досвід</div>
              </div>
            </div>
            <button 
              onClick={resetProgress}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-colors"
            >
              Скинути прогрес
            </button>
          </div>
          
          {/* Achievements */}
          <div className="flex gap-3 flex-wrap">
            {achievements.map((ach, idx) => (
              <div 
                key={idx}
                className={`px-4 py-2 rounded-full text-sm ${
                  ach.condition 
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600' 
                    : 'bg-slate-700 opacity-50'
                }`}
              >
                <span className="mr-2">{ach.icon}</span>
                {ach.name}
              </div>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="space-y-6">
          {levels.map((level) => {
            const progress = getLevelProgress(level);
            const unlocked = isLevelUnlocked(level.id);
            
            return (
              <div 
                key={level.id} 
                className={`bg-slate-800 rounded-lg shadow-2xl overflow-hidden transition-all ${
                  !unlocked ? 'opacity-60' : ''
                }`}
              >
                <div className={`${level.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {!unlocked && <Lock size={28} />}
                      <div>
                        <h2 className="text-2xl font-bold">{level.title}</h2>
                        <p className="text-white/80">{level.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{progress.completed}/{progress.total}</div>
                      <div className="text-sm">завдань</div>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-4 bg-black/20 rounded-full h-3">
                    <div 
                      className="bg-white rounded-full h-3 transition-all duration-500"
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </div>

                {unlocked && (
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      {level.tasks.map((task) => (
                        <div 
                          key={task.id}
                          onClick={() => toggleTask(task.id, task.xp)}
                          className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${
                            completedLevels[task.id]
                              ? 'bg-green-900/30 border-l-4 border-green-500'
                              : 'bg-slate-700 hover:bg-slate-600'
                          }`}
                        >
                          {completedLevels[task.id] ? (
                            <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                          ) : (
                            <Circle className="text-gray-500 flex-shrink-0" size={24} />
                          )}
                          <div className="flex-grow">
                            <div className="flex items-center gap-2">
                              <span>{getTaskIcon(task.type)}</span>
                              <span className={completedLevels[task.id] ? 'line-through text-gray-400' : ''}>
                                {task.name}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-yellow-400 font-bold">
                            <Star size={16} />
                            {task.xp} XP
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge */}
                    <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-4 rounded-lg border-2 border-purple-500">
                      <div className="flex items-center gap-3 mb-2">
                        <Trophy className="text-yellow-400" size={24} />
                        <div className="font-bold text-lg">Фінальний челендж</div>
                      </div>
                      <div className="text-gray-200 mb-2">{level.challenge}</div>
                      <div className="flex items-center gap-2 text-yellow-400 font-bold">
                        <Award size={16} />
                        Бонус: {level.bonus} XP
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <div className="mt-12 bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="text-blue-400" />
            Поради для максимального прогресу
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Кодьте щодня хоча б 30 хвилин</li>
            <li>✅ Реєструйтесь на Codewars, Exercism, LeetCode</li>
            <li>✅ Ведіть щоденник навчання</li>
            <li>✅ Публікуйте проєкти на GitHub</li>
            <li>✅ Приєднайтесь до Go спільноти (Reddit, Discord)</li>
            <li>✅ Читайте чужий код та робіть code review</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GolangLearningPath;
