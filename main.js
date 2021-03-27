$(function () {
    let myChart = echarts.init(document.getElementById('echart'));
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {},
        legend: {
            data: ['']
        },
        xAxis: {
            data: [2000,2005,2010,2015,2020]
        },
        yAxis: {},
        series: [{
            name: '排名',
            type: 'line',
            smooth: false,
            data: [6,9,8,8,7]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    var e = $(".handsontable");
    return new Handsontable(e.get(0), {
        data: [["Java", "1", "降", "-0.01%"],
        ["C", "2", "升", "+2.44%"],
        ["Python", "3", "升", "+1.42%"],
        ["C++", "4", "降", "-2.58%"],
        ["C#", "5", "升", "+2.07%"],
        ["Visual Basic .NET", "6", "降", "-1.17%"], ["JavaScript", "7", "降", "-0.85%"]],

        colHeaders: ["语言名称", "排名", "升或降", "变化幅度"],
        contextMenu: true,//启用右键菜单
        colWidths: 150,
        rowHeights: 40,
        className: "htMiddle htCenter",//垂直水平居中
        manualColumnResize: true,//允许拖动
        columnSorting: true,//允许排序
        sortOrder: false,//false降序排列
    })

});