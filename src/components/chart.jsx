import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadialBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['1', '2', '3', '4', '5'],
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'round',
          colors: undefined,
          width: '0',
          dashArray: 0,
        },
        legend: {
          show: false,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,

          horizontalAlign: 'center',
          floating: false,
          fontSize: '0px',
          fontFamily: 'Nunito',
          width: undefined,
          height: undefined,
          formatter: undefined,
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: 'white',
            useSeriesColors: false,
          },
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: '#fff',
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
          },

          onItemClick: {
            toggleDataSeries: true,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
        },
        plotOptions: {
          radialBar: {
            size: 0,
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
              margin: 10,
              size: '25%',
              background: 'transparent',
              image: undefined,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageClipped: true,
              position: 'front',
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: 'rgba(0, 0, 40, 0.2)',
              strokeWidth: '90%',
              opacity: 1,
              margin: 9,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            },
            dataLabels: {
              show: false,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: undefined,
                color: undefined,
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: '16px',
                fontFamily: undefined,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val + '%';
                },
              },
              total: {
                show: false,
                label: '',
                color: '#ffffff',
                formatter: function (w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0) /
                      w.globals.series.length +
                    '%'
                  );
                },
              },
            },
          },
        },
      },

      series: [75, 60, 41, 17, 15],
    };
  }

  render() {
    return (
      <div className='donut w-full | relative | max-w-md mx-auto'>
        {/* top */}
        <p className='text-base | absolute inset-x-0 top-0 text-center pt-3 font-black'>
          100%
        </p>

        <p className='text-base | absolute inset-y-0 right-0 text-center pr-3 font-black | fcc'>
          25%
        </p>

        {/* Bottom */}
        <p className='text-base | absolute inset-x-0 bottom-0 text-center pb-3 font-black'>
          50%
        </p>

        <p className='text-base | absolute inset-y-0 left-0 text-center pl-3 font-black | fcc'>
          75%
        </p>

        <div className='py-7 px-3'>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='radialBar'
            width={`100%`}
            // height={`100%`}
          />
        </div>
      </div>
    );
  }
}

export default RadialBar;
