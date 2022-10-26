1. Поставить Redux - **npm install redux**
2. Создать папку src/redux, а внутри ее файл store.js, который будет
   экспортировать глобальное состояние (store)
3. Внутри файла store.js импортировать из пакета redux функцию creatStore:
   **import {createStore} from 'redux'**
4. Создать reducer - функцию, которая создает начальное значение глобального
   состояния и потом будет его менять. Функция должна возвращать значение!!
   1**const reducer = store => { return store; };** 2**const reducer =
   (store=initialStore)=> { return store; };**
5. Создать initialStore - обьект, описывающий начальное значение и общую
   структуру глобального состояния.
6. создать любой из вариантов: 1**store = sreateStore(reducer, initialStore)**
   2**store = sreateStore(reducer)** и экспортировать его: **export default
   store;**
7. Поставить пакет 'react-redux' - **npm install react-redux**
8. В index.js импортировать store из 'redux/store.js' - **import store from
   './redux/store';**
9. В index.js импортировать 'react-redux' - **import { Provider } from
   'react-redux';**
10. Обернуть приложение App в компонент Provider - ** <Provider store={store}>
    <App /> </Provider>**
11. ПОДПИСЫВАНИЕ КОМПОНЕНТОВ НА ЧАСТЬ STORE:
12. В нужном компоненте импортируем функцию useSelector из react-redux: **import
    {useSelector} from 'react-redux'**
13. Подписываемся на нужную часть store, передавая в useSelector callback,
    который в первом аргументе получает весь store, и возвращает ту часть store,
    на которую мы подписались: **const contacts =
    useSelector(store=>store.contacts)** ....
