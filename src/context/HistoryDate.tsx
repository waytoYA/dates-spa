export default class HistoryDate {
    _date: object[];
    _selectedDate: number;


    constructor() {
        this._date = [
            {number: 1, name: 'Технологии', startYear: 1981, endYear: 1986, news:
                [{year: 1982, text: '«Назад в будущее 2»/Back To The Future 2, США'},
                {year: 1983, text: '«Кто подставил кролика Роджера», США'},
                {year: 1984, text: '«Хищник»/Predator, США'},
                {year: 1985, text: '«Назад в будущее» - 9 из 10 - BadComedian, Russia'},
                {year: 1986, text: '«Семейка Аддамс», США'},]
            },

            {number: 2, name: 'Кино', startYear: 1987, endYear: 1991, news:
                [{year: 1987, text: '«Хищник»/Predator, США'},
                {year: 1988, text: '«Кто подставил кролика Роджера», США'},
                {year: 1989, text: '«Назад в будущее 2»/Back To The Future 2, США'},
                {year: 1990, text: '«Назад в будущее» - 10 из 10 - BadComedian, Russia'},
                {year: 1991, text: '«Семейка Аддамс», США'},]
            },

            {number: 3, name: 'Литература', startYear: 1992, endYear: 1997, news:
                [{year: 1992, text: 'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'},
                {year: 1994, text: '«Бессоница» - роман Стивена Кинга.'},
                {year: 1995, text: 'Нобелевская премия по литературе - Шеймас Хини'},
                {year: 1996, text: '«Бессоница» - роман Стивена Кинга.'},
                {year: 1997, text: 'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'},]
            },

            {number: 4, name: 'Астрология', startYear: 1999, endYear: 2004, news:
                [{year: 1999, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
                {year: 2000, text: '13 октября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
                {year: 2002, text: '13 ноября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
                {year: 2003, text: '13 февраля — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
                {year: 2004, text: 'Ученый охренели от количества солнечных затмений'},]
            },

            {number: 5, name: 'Математика', startYear: 2005, endYear: 2011, news:
                [{year: 2005, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Марса'},
                {year: 2007, text: '23 сентября — частное солнечное затмение, видимое в Северной Африке и части Антарктиды'},
                {year: 2008, text: '3 сентября — частное солнечное затмение, видимое в Америке и части Антарктиды'},
                {year: 2009, text: '33 сентября — частное солнечное затмение, видимое в Австралии и части Антарктиды'},
                {year: 2010, text: '43 сентября — частное солнечное затмение, видимое на Луне и части Сатурна'},]
            },
            
            {number: 6, name: 'Наука', startYear: 2015, endYear: 2022, news:
                [{year: 2015, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
                {year: 2016, text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'},
                {year: 2017, text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'},
                {year: 2018, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'},
                {year: 2019, text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'},]
            },
        ]

        this._selectedDate = 3
    }

    get date() {
        return this._date
    }


    setSelectedDate (num: number) {
        this._selectedDate = num
    }
    get selectedDate () {
        return this._date[this._selectedDate - 1]
    }
}