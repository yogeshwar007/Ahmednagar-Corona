
//pie char 
let labels1 = ['Recovered', 'Deaths', 'Active Cases'];

let data1 = [1945, 51, 1451];

let colors1 = ['#007521', '#b50f00', '#07b5a1'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {

    type: 'pie',
    data: {

        labels: labels1,
        datasets: [{

            data: data1,
            backgroundColor: colors1

        }]

    },

    options: {

        title: {

            text: " Summary of Deaths,Active and Recovered Cases",
            display: true
        }
    }


});



//bar chart 
let columnLabels = ['Total Cases', 'Recovered', 'Active Cases', 'Deaths'];
let columnData = [3447, 1945, 1451, 51];
let columnColors = ['#051f96', '#007521', '#07b5a1', '#b50f00'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let Cchart = new Chart(myChart2, {


    type: 'bar',
    data: {

        labels: columnLabels,
        datasets: [{

            data: columnData,
            backgroundColor: columnColors
        }]
    },

    options: {

        title: {

            text: 'Total Summary',
            display: true
        },

        legend: {
            display: false

        }
    }


});



// taulka wise bar chart 
// let columnLabels2 = ['Nagar(City)', 'Sangamner', 'Rahata', 'Jamkhed', 'Newasa', 'Kopargaon', 'Pathardi', 'Parner',
//     'Shrirampur', 'Nagar(Rural)', 'Shrigonda', 'Karjat', 'Akole', 'Shevgaon', 'Rahuri'];

// let columnData2 = [462, 286, 57, 32, 33, 22, 59, 48, 47, 107, 58, 18, 47, 34, 16];
// let columnData6 = [];

// let columnColors2 = ['#051f96', '#007521', '#07b5a1', '#b50f00', '#97a832',
//     '#966265', '#8c0d6a', '#051f96', '#007521', '#07b5a1', '#b50f00', '#97a832',
//     '#966265', '#8c0d6a', '#91d18a'];

// let myChart7 = document.getElementById("myChart7").getContext('2d');

// let taulkachart = new Chart(myChart7, {


//     type: 'bar',
//     data: {

//         labels: columnLabels2,
//         datasets: [{

//             data: columnData2,
//             backgroundColor: columnColors2
//         }]
//     },

//     options: {

//         title: {

//             text: 'Taulka Wise Total Positive',
//             display: true
//         },

//         legend: {
//             display: false

//         }
//     }


// });



chart2();
chart3();
chart4();
chart6();


//chart function for active cases
async function chart2() {
    const data = await getData1();

    // const linecolor1 = [''];

    const myChart3 = document.getElementById("myChart3").getContext('2d');

    const linechart = new Chart(myChart3, {

        type: 'bar',
        data: {

            labels: data.xlabels,
            datasets: [
                {

                    data: data.activenum,
                    backgroundColor: "#07b5a1",
                    fill: false,
                    borderColor: "rgba(5, 163, 155)",
                    label: 'Active'

                }]
        },
        options: {

            title: {

                text: 'Active Cases',
                display: true
            },

            legend: {
                display: true

            }
        }

    });

}

//getdata functionfor active cases)

async function getData1() {

    const xlabels = [];
    const activenum = [];

    const response = await fetch('Ahmednagar CSV4.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');

        const date = columns[0];
        xlabels.push(date);

        const active = columns[1];
        activenum.push(active);

        const recovered = columns[2];


        const dead = columns[3];


        const cases = columns[4];


    });

    return { xlabels, activenum };

}



//chart function for death cases

async function chart3() {

    const data = await getData2();


    const myChart4 = document.getElementById("myChart4").getContext('2d');

    let linechart2 = new Chart(myChart4, {

        type: 'bar',
        data: {

            labels: data.xlabels,

            datasets: [
                {
                    data: data.totaldead,
                    backgroundColor: "#b50f00",
                    fill: false,
                    borderColor: "rgba(125, 11, 2)",
                    label: 'Death'

                }]
        },
        options: {

            title: {

                text: 'Death',
                display: true
            },

            legend: {
                display: true

            }
        }

    });
}


//getdata function for dead cases)

async function getData2() {

    const xlabels = [];
    const totaldead = [];

    const response = await fetch('Ahmednagar CSV4.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');

        const date = columns[0];
        xlabels.push(date);

        const active = columns[1];


        const recovered = columns[2];


        const dead = columns[3];
        totaldead.push(dead);

        const cases = columns[4];


    });

    return { xlabels, totaldead };

}


//chart function for recovered cases
async function chart4() {
    const data = await getData3();

    const myChart5 = document.getElementById("myChart5").getContext('2d');

    const linechart3 = new Chart(myChart5, {

        type: 'bar',
        data: {

            labels: data.xlabels,

            datasets: [
                {
                    data: data.totalrecovered,
                    backgroundColor: "#007521",
                    fill: false,
                    borderColor: "rgba(0, 117, 33)",
                    label: 'Recovered'

                }]
        },
        options: {

            title: {

                text: 'Total Recovered',
                display: true
            },

            legend: {
                display: true

            }
        }

    });

}

//getdata function for recovered cases
async function getData3() {

    const xlabels = [];
    const totalrecovered = [];

    const response = await fetch('Ahmednagar CSV4.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');

        const date = columns[0];
        xlabels.push(date);

        const recovered = columns[2];
        totalrecovered.push(recovered);

    });

    return { xlabels, totalrecovered };

}

//chart function for day wise progress
async function chart6() {

    const data = await getData4();

    const mychart6 = document.getElementById("line-chart").getContext('2d');

    const linechart4 = new Chart(mychart6, {

        type: 'line',
        data: {

            labels: data.xlabels,
            datasets: [
                {

                    data: data.activenum,
                    backgroundColor: "#07b5a1",
                    fill: false,
                    borderColor: "rgba(5, 163, 155)",
                    label: 'Active'

                }, {

                    data: data.totaldead,
                    backgroundColor: "#b50f00",
                    fill: false,
                    borderColor: "rgba(125, 11, 2)",
                    label: 'Death'

                }, {

                    data: data.totalrecovered,
                    backgroundColor: "#007521",
                    fill: false,
                    borderColor: "rgba(0, 117, 33)",
                    label: 'Recovered'


                }

            ]
        },
        options: {

            title: {

                text: 'Day Wise Progress',
                display: true
            },

            legend: {
                display: true

            }
        }

    });

}
//getdata function for daywise progess

async function getData4() {

    const xlabels = [];
    const activenum = [];
    const totaldead = [];
    const totalrecovered = [];

    const response = await fetch('Ahmednagar CSV4.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');

        const date = columns[0];
        xlabels.push(date);

        const active = columns[1];
        activenum.push(active);

        const recovered = columns[2];
        totalrecovered.push(recovered);

        const dead = columns[3];
        totaldead.push(dead);

        const cases = columns[4];


    });

    return { xlabels, activenum, totaldead, totalrecovered };

}