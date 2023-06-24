
export default {
    credentials: {
        user: {
            username: 'demo',
            password: 'demo'
        }
    },
    loginPageErrors:{
        usernameErr:'Введите имя пользователя',
        passwordErr:'Введите пароль'
    },
    urls:{
        mainPage: 'https://try.vikunja.io/',
        loginPage: 'https://try.vikunja.io/login',
        settingsPage: 'https://try.vikunja.io/user/settings/general',
        aboutPage: 'https://try.vikunja.io/about',
        upcomingChallengesPage: 'https://try.vikunja.io/tasks/by/upcoming',
        projectsPage: 'https://try.vikunja.io/projects',
        labelsPage: 'https://try.vikunja.io/labels',
        teamsPage: 'https://try.vikunja.io/teams'
    },
    titlesPages:{
        mainPageTitle:'Текущие задачи | Vikunja',
        upcomingChallengesTitle:{
            subStr1:'Задачи с',
            subStr2:'по',
            subStr3:'| Vikunja'
        },
        projectsPageTitle:'Название проекта | Vikunja',
        labelsPageTitle:'Метки | Vikunja',
        teamsPageTitle:'Команды | Vikunja',
    },
    mainMenuItems:{
        reviewItem: 'Обзор',
        upcomingChallengesItem: 'Предстоящие задачи',
        projectsItem: 'Проекты',
        labelsItem: 'Метки',
        teamsItem: 'Команды'
    },
    userMenuTitles:{
        basicSettingsItem: 'Основные настройки',
        keyboardShortcutsItem:{
            keyboardShortcutsItem: 'Сочетания клавиш',
                subTitles:{
                    mainTitle: 'Основное',
                    navigationTitle: 'Навигация',
                    kanbanTitle: 'Канбан',
                    projectViewTitle: 'Просмотр проекта',
                    issuePageTitle: 'Страница задачи'
                }
            },
        aboutItem:{
            aboutItem: 'О Vikunja',
                subTitles: {
                    frontendVersionTitle: 'Версия фронтенда:',
                    apiVersionTitle: 'Версия API:'
                }
            }
    }
}
