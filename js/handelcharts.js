// Custom Functions Chart

const labels = [
    '19/5',
    '18/4',
    '17/6',
    '20/7',
    '22/7',
    '30/8',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
    '30/30',
  
  ];
  
  const data = {
    labels: labels,
    datasets: [
      {
      label: 'Average',
      data: [60, 35, 40, 45, 50, 55, 60 ,43, 61, 35, 40, 62, 60, 55 ,50, 45, 40 ],
      
      backgroundColor: [
        '#E2EDF6',
      ],
      borderColor: '#000', 
      type: 'bar',
      borderWidth: 1,
      borderRadius:20,
      borderSkipped: false,
      barPercentage: .75,
      categoryPercentage: .75,
    },
    {
      label: 'Adam',
      data: [60, 55, 48, 48, 59, 51, 59 ,58, 53, 59, 43, 56, 58, 60 ,65, 59, 50],
      backgroundColor: [
        '#E5E3E3',
      ],
      borderColor: '#000',
      type: 'bar',
      borderWidth: 1,
      borderRadius:20,
      borderSkipped: false,
      barPercentage: .75,
      categoryPercentage: .75,
    },
  ]
  };
  const config = {
    
    type: 'bar',
    data: data,
    labelTextColor: '#000',
  
    options: {
      responsive: true,
      scales: {
       y:{
        ticks: {
          stepSize: 5,
          callback: function(value, index, values) {
            return value + '%';
          }
        },
       }
       
    },
      aspectRatio: 3,
      layout: {
        padding: 20
    },
      plugins: {
            legend: {
              position: 'top',
              align: 'start',
              labels: {
                boxWidth: 6,
                borderRadius: 5,
              }
            }
            }
    }
  };
  
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config,
  
  );
  
  