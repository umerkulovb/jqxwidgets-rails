jqx_localization =
{
    // separator of parts of a date (e.g. '/' in 11/05/1955)
    '/': "/",
    // separator of parts of a time (e.g. ':' in 05:44 PM)
    ':': ":",
    // the first day of the week (0 = Sunday, 1 = Monday, etc)
    firstDay: 0,
    days: {
        // full day names
        names: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        // abbreviated day names
        namesAbbr: ["Воск", "Пон", "Втор", "Сред", "Четв", "Пятн", "Субб"],
        // shortest day names
        namesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    },
    months: {
        // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
        names: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
        // abbreviated month names
        namesAbbr: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек", ""]
    },
    // AM and PM designators in one of these forms:
    // The usual view, and the upper and lower case versions
    //      [standard,lowercase,uppercase]
    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
    //      null
    AM: ["AM", "am", "AM"],
    PM: ["PM", "pm", "PM"],
    eras: [
        // eras in reverse chronological order.
        // name: the name of the era in this culture (e.g. A.D., C.E.)
        // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
        // offset: offset in years from gregorian calendar
        { "name": "A.D.", "start": null, "offset": 0 }
    ],
    twoDigitYearMax: 2029,
    patterns: {
        // short date pattern
        d: "M/d/yyyy",
        // long date pattern
        D: "dddd, MMMM dd, yyyy",
        // short time pattern
        t: "h:mm tt",
        // long time pattern
        T: "h:mm:ss tt",
        // long date, short time pattern
        f: "dddd, MMMM dd, yyyy h:mm tt",
        // long date, long time pattern
        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
        // month/day pattern
        M: "MMMM dd",
        // month/year pattern
        Y: "yyyy MMMM",
        // S is a sortable format that does not vary by culture
        S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
        // formatting of dates in MySQL DataBases
        ISO: "yyyy-MM-dd hh:mm:ss",
        ISO2: "yyyy-MM-dd HH:mm:ss",
        d1: "dd.MM.yyyy",
        d2: "dd-MM-yyyy",
        d3: "dd-MMMM-yyyy",
        d4: "dd-MM-yy",
        d5: "H:mm",
        d6: "HH:mm",
        d7: "HH:mm tt",
        d8: "dd/MMMM/yyyy",
        d9: "MMMM-dd",
        d10: "MM-dd",
        d11: "MM-dd-yyyy"
    },
    percentsymbol: "%",
    currencysymbol: " руб",
    currencysymbolposition: "after",
    decimalseparator: '.',
    thousandsseparator: ' ',
    pagergotopagestring: "Страница:",
    pagershowrowsstring: "Показать:",
    pagerrangestring: " из ",
    pagerpreviousbuttonstring: "предыдущая",
    pagernextbuttonstring: "следующая",
    pagerfirstbuttonstring: "первая",
    pagerlastbuttonstring: "последняя",
    groupsheaderstring: "Перетащите сюда колонку чтобы сгруппировать по ней данные",
    sortascendingstring: "По возрастанию",
    sortdescendingstring: "По убыванию",
    sortremovestring: "Убрать сортировку",
    groupbystring: "Группировать по этой колонке",
    groupremovestring: "Убрать из группировки",
    filterclearstring: "Очистить",
    filterstring: "Фильтр",
    filtershowrowstring: "Показать строки:",
    filterorconditionstring: "или",
    filterandconditionstring: "и",
    filterselectallstring: "(Выделить все)",
    filterchoosestring: "Выбор:",
    filterstringcomparisonoperators: ['пустая строка', 'не пустая строка', 'содержит', 'содержит (с учетом регистра)',
        'не содержит', 'не содержит (с учетом регистра)', 'начинается с', 'начинается с (с учетом регистра)',
        'заканчивается на', 'заканчивается на (с учетом регистра)', 'равно', 'равно (с учетом регистра)', 'отсутствует', 'присутствует'],
    filternumericcomparisonoperators: ['равно', 'не равно', 'меньше', 'меньше или равно', 'больше', 'больше или равно', 'отсутствует', 'присутствует'],
    filterdatecomparisonoperators: ['равно', 'не равно', 'меньше', 'меньше или равно', 'больше', 'больше или равно', 'отсутствует', 'присутствует'],
    filterbooleancomparisonoperators: ['равно', 'не равно'],
    validationstring: "Введено неверное значение",
    emptydatastring: "Нет данных для отображения",
    filterselectstring: "Выбрать фильтр",
    loadtext: "Загрузка...",
    clearstring: "Очистить",
    todaystring: "Сегодня"
};
