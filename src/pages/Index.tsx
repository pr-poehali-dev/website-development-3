import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [autoPayment, setAutoPayment] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Home" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-heading font-bold text-blue-500">ПлатежиВовремя</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'dashboard' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('payments')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'payments' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Платежи
              </button>
              <button 
                onClick={() => setActiveTab('contracts')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'contracts' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Договоры
              </button>
              <button 
                onClick={() => setActiveTab('support')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'support' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Поддержка
              </button>
            </nav>

            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {activeTab === 'dashboard' && (
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading mb-4 text-3xl text-gray-800 font-semibold">Профессиональный сервис для арендаторов и арендодателей</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Автоматизируйте процесс сбора арендной платы с помощью современной платформы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Настроить платежи
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" size={20} className="mr-2" />
                Создать договор
              </Button>
            </div>
          </div>
        )}

        {/* Benefits Table */}
        {activeTab === 'dashboard' && (
          <div className="mb-12 animate-slide-up">
            <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-8">
              Главные преимущества сервиса
            </h3>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-primary/10 to-accent/10">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Преимущество</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Описание</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Экономия времени</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Статус</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                              <Icon name="Zap" size={16} className="text-success" />
                            </div>
                            <span className="font-medium">Безупречная пунктуальность</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">Оплата поступает строго по графику</td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="default" className="bg-success text-white">95% времени</Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-success text-white">Активно</Badge>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name="FileCheck" size={16} className="text-primary" />
                            </div>
                            <span className="font-medium">Финансовая защита </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">Обеспечение регулярных выплат независимо от просрочек квартирантов</td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="default" className="bg-primary text-white">80% времени</Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-success text-white">Активно</Badge>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                              <Icon name="Bell" size={16} className="text-warning" />
                            </div>
                            <span className="font-medium">Полная компенсация ущерба</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">Гарантированное возмещение всех потерь при досрочном выезде, расторжении договора или повреждении имущества не по вине арендодателя</td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="default" className="bg-warning text-white">70% времени</Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-success text-white">Активно</Badge>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Icon name="BarChart3" size={16} className="text-accent" />
                            </div>
                            <span className="font-medium">Аналитика доходов</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          Отслеживайте прибыль, расходы и рентабельность объектов
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="default" className="bg-accent text-white">60% времени</Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-success text-white">Активно</Badge>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                              <Icon name="Shield" size={16} className="text-destructive" />
                            </div>
                            <span className="font-medium">Защита платежей</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          Банковская безопасность и страхование всех транзакций
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="default" className="bg-destructive text-white">100% защита</Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-success text-white">Активно</Badge>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <Icon name="Smartphone" size={16} className="text-blue-500" />
                            </div>
                            <span className="font-medium">Мобильное приложение</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          Управляйте арендой в любое время с телефона или планшета
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge variant="default" className="bg-blue-500 text-white">24/7 доступ</Badge>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className="bg-success text-white">Активно</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Dashboard Stats */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Всего объектов</CardTitle>
                <Icon name="Building" size={16} className="text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 в этом месяце</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Месячный доход</CardTitle>
                <Icon name="DollarSign" size={16} className="text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₽245,000</div>
                <p className="text-xs text-success">+18% от прошлого месяца</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Активные договоры</CardTitle>
                <Icon name="FileCheck" size={16} className="text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">11</div>
                <p className="text-xs text-muted-foreground">1 на согласовании</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Автоплатежи</CardTitle>
                <Icon name="Zap" size={16} className="text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">91%</div>
                <p className="text-xs text-muted-foreground">10 из 11 настроено</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Auto Payment Settings */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold">Автоматические платежи</h3>
                <p className="text-gray-600">Настройте регулярные платежи для ваших арендаторов</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Автоплатежи</span>
                <Switch checked={autoPayment} onCheckedChange={setAutoPayment} />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  Настройки автоплатежей
                </CardTitle>
                <CardDescription>
                  Управляйте автоматическими списаниями арендной платы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">День списания</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>1 число каждого месяца</option>
                      <option>5 число каждого месяца</option>
                      <option>10 число каждого месяца</option>
                      <option>15 число каждого месяца</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Способ уведомления</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>SMS + Email</option>
                      <option>Только SMS</option>
                      <option>Только Email</option>
                      <option>Push-уведомления</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-3">Активные автоплатежи</h4>
                  <div className="space-y-3">
                    {[
                      { address: "ул. Тверская, 12", tenant: "Иванов И.И.", amount: "45,000", status: "active" },
                      { address: "пр. Мира, 88", tenant: "Петрова М.С.", amount: "35,000", status: "active" },
                      { address: "ул. Арбат, 5", tenant: "Сидоров А.П.", amount: "55,000", status: "pending" }
                    ].map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name="Home" size={16} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{payment.address}</div>
                            <div className="text-sm text-gray-600">{payment.tenant}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="font-medium">₽{payment.amount}</div>
                            <Badge variant={payment.status === 'active' ? 'default' : 'secondary'}>
                              {payment.status === 'active' ? 'Активен' : 'Ожидание'}
                            </Badge>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Settings" size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contracts Section */}
        {activeTab === 'contracts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold">Договоры аренды</h3>
                <p className="text-gray-600">Управляйте всеми договорами в одном месте</p>
              </div>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Новый договор
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { address: "ул. Тверская, 12", tenant: "Иванов Иван Иванович", status: "active", amount: "45,000", expires: "31.12.2024" },
                { address: "пр. Мира, 88", tenant: "Петрова Мария Сергеевна", status: "active", amount: "35,000", expires: "15.06.2025" },
                { address: "ул. Арбат, 5", tenant: "Сидоров Алексей Петрович", status: "pending", amount: "55,000", expires: "20.03.2025" }
              ].map((contract, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{contract.address}</CardTitle>
                      <Badge variant={contract.status === 'active' ? 'default' : 'secondary'}>
                        {contract.status === 'active' ? 'Активен' : 'На согласовании'}
                      </Badge>
                    </div>
                    <CardDescription>{contract.tenant}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Сумма аренды:</span>
                      <span className="font-medium">₽{contract.amount}/мес</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Действует до:</span>
                      <span className="font-medium">{contract.expires}</span>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="FileText" size={14} className="mr-1" />
                        Просмотр
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Edit" size={14} className="mr-1" />
                        Изменить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Support Section */}
        {activeTab === 'support' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-bold">Поддержка</h3>
              <p className="text-gray-600">Мы всегда готовы помочь вам</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} />
                    Часто задаваемые вопросы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-b pb-3">
                      <h4 className="font-medium">Как настроить автоплатежи?</h4>
                      <p className="text-sm text-gray-600 mt-1">Перейдите в раздел "Платежи" и включите автоматические списания</p>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-medium">Что делать, если платеж не прошел?</h4>
                      <p className="text-sm text-gray-600 mt-1">Система автоматически уведомит арендатора и предложит альтернативы</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Как изменить условия договора?</h4>
                      <p className="text-sm text-gray-600 mt-1">В разделе "Договоры" выберите нужный договор и нажмите "Изменить"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={20} />
                    Связаться с нами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <Button className="justify-start h-auto p-4" variant="outline">
                      <Icon name="MessageCircle" size={20} className="mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Онлайн-чат</div>
                        <div className="text-sm text-gray-600">Мгновенные ответы 24/7</div>
                      </div>
                    </Button>
                    
                    <Button className="justify-start h-auto p-4" variant="outline">
                      <Icon name="Mail" size={20} className="mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Email поддержка</div>
                        <div className="text-sm text-gray-600">support@rentpay.ru</div>
                      </div>
                    </Button>
                    
                    <Button className="justify-start h-auto p-4" variant="outline">
                      <Icon name="Phone" size={20} className="mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Телефон</div>
                        <div className="text-sm text-gray-600">8 (800) 123-45-67</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-4 gap-1">
          {[
            { key: 'dashboard', icon: 'Home', label: 'Главная' },
            { key: 'payments', icon: 'CreditCard', label: 'Платежи' },
            { key: 'contracts', icon: 'FileText', label: 'Договоры' },
            { key: 'support', icon: 'HelpCircle', label: 'Поддержка' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center py-2 px-1 text-xs transition-colors ${
                activeTab === tab.key ? 'text-primary' : 'text-gray-600'
              }`}
            >
              <Icon name={tab.icon as any} size={20} />
              <span className="mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;