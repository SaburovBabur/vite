import React from 'react';
import Chart from '@/components/chart';
function Home() {
  return (
    <div className='bg-dark-linear'>
      <div className='flex | relative'>
        <div className='h-screen w-[5%] | bg-white |  px-2 overflow-hidden'>
          <div className='w-full h-full | sticky inset-x-0 left-0 overflow-hidden'>
            <div className='w-full h-full | flex flex-col items-center justify-start | overflow-auto py-7 overflow-hidden'>
              <div class='indicator | pb-5'>
                <div class='w-[3.25rem] h-[3.25rem] | rounded-[1.25rem] overflow-hidden | bg-[#272727] | flex items-center justify-center click:scale'>
                  <img src='/storage/bitmap.png' className='object-contain' />
                </div>
                <div class='indicator-item | bg-[#FE5B81] w-3.5 h-3.5 | rounded-full top-[4px!important] right-[4px!important]'></div>
              </div>

              <div class='indicator'>
                <div class='w-[3.25rem] h-[3.25rem] | rounded-[1.25rem] overflow-hidden | bg-black | flex items-center justify-center click:scale'>
                  <img src='/storage/bitmap2.png' className='object-contain' />
                </div>
              </div>

              <div className='plus | text-4xl font-thin | mt-7 px-5 | cursor-pointer | flex items-center justify-center click:scale hover:bg-gray-100 py-2 rounded-[1.25rem]'>
                +
              </div>
            </div>
          </div>
        </div>
        <div className='h-screen w-[95%] | overflow-y-auto | text-white | px-12 py-12'>
          <div className='flex | space-x-3'>
            <div className='w-2/3 | px-16 py-12  | bg-white bg-opacity-10 | rounded-2xl | flex-col flex justify-center'>
              <h1 className='font-bold text-2xl'>Happy Tuesday, Lily.</h1>
              <p className='text-[#C5C5C5] pt-7 | leading-8 text-lg'>
                Lorem ipsum dolor sit amet, dicam diceret molestiae in his. Eum
                putent possit ea. Ex mei
                <a href='#' className='font-black text-white px-2'>
                  discere
                </a>
                feugiat, pri ex nisl delicata sapientem, quod bonorum appetere
                te per. Offendit dissentiunt at nam,
                <a href='#' className='font-black text-white px-2'>
                  ea has
                </a>
                illud dolore deseruisse.
              </p>
            </div>

            <div className='w-1/3 | bg-white bg-opacity-10 | rounded-2xl fcc'>
              <Chart />
            </div>
          </div>

          <div className='infos | flex | text-gray-900 | space-x-3 mt-5'>
            <div className='w-2/3 | grid grid-cols-2'>
              <div className='col-span-1 mr-1.5 space-y-3'>
                <div className='card | bg-white | py-5'>
                  <h1 className='font-black text-lg | text-center | pb-2'>
                    Creative reviews
                  </h1>
                  <div className='fcb | mx-2 px-3 py-2 | bg-gray-50 | rounded-md'>
                    <div className='info | flex |'>
                      <div className='img | h-12 w-20 rounded-lg overflow-hidden'>
                        <img
                          src='/storage/bitmap3.png'
                          alt='#'
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div className='flex justify-center flex-col | pl-3'>
                        <h1 className='font-bold'>Reel</h1>
                        <p className='text-xs text-gray-500'>3 hours ago</p>
                      </div>
                    </div>
                    <div className='bg-red-400 | px-5 py-1 | rounded-full | text-sm text-white font-bold'>
                      Needs Review
                    </div>
                  </div>
                  <h1 className='font-bold text-base | border border-gray-300 | text-center | mt-5 mx-16 py-1 rounded-full | cursor-pointer'>
                    2 more reviews
                  </h1>
                </div>

                <div className='flex | space-x-2'>
                  <div className='card px-1 w-1/2 py-3 | bg-white | space-y-5'>
                    <h3 className='text-md font-black text-center'>
                      Call with The Team
                    </h3>

                    <h2 className='text-center font-thin text-4xl text-[#4D61F6]'>
                      In 43 min
                    </h2>

                    <div className='fcc space-x-2'>
                      <button className='text-xs | bg-[#4D61F6] border-none rounded-full font-extrabold px-7 py-2 text-white outline focus:outline-none click:scale'>
                        Join Zoom
                      </button>
                      <button className='text-xs | bg-gray-100 text-gray-900 border-none rounded-full font-extrabold px-3 py-2 text-white outline focus:outline-none click:scale'>
                        Details
                      </button>
                    </div>

                    <button className='font-bold text-sm | border border-gray-300 | text-center | mx-2 px-5 w-auto py-1 rounded-full | outline focus:outline-none click:scale'>
                      7 more events
                    </button>
                  </div>
                  <div className='card px-1 w-1/2 py-3 | bg-white | space-y-7'>
                    <h3 className='text-md font-black text-center'>
                      Account Manager
                    </h3>

                    <div className='user | fcc'>
                      <div className='img | h-12 w-12 rounded-full overflow-hidden flex-shrink-0'>
                        <img
                          src='/storage/bitmap3.png'
                          alt='#'
                          className='h-full w-full object-cover'
                        />
                      </div>

                      <h3 className='font-black text-center | w-32 whitespace-nowrap overflow-hidden'>
                        Sarah Smith
                      </h3>
                    </div>

                    <div className='fcc space-x-2'>
                      <button className='text-xs | bg-[#4D61F6] border-none rounded-full font-extrabold px-7 py-2 text-white outline focus:outline-none click:scale'>
                        Slack
                      </button>
                      <button className='text-xs | bg-[#4D61F6] border-none rounded-full font-extrabold px-7 py-2 text-white outline focus:outline-none click:scale'>
                        Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-1 ml-1.5'>
                <div className='h-full | bg-white | py-5 rounded-[1.25rem]'>
                  <h1 className='font-black text-lg | text-center | pb-2'>
                    Recent Documents
                  </h1>
                  <div className='space-y-2'>
                    <div className='fcb | mx-2 px-4 py-4 | bg-[#F8F8F8] | rounded-md'>
                      <div className='info | flex |'>
                        <div className='img | h-14 w-14 rounded-2xl overflow-hidden | bg-[#674DF6] | fcc'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 15 19'
                            className='h-5'
                          >
                            <path
                              fill='#fff'
                              fillRule='evenodd'
                              d='M9.366 1a.257.257 0 00-.039.005H1.261A.263.263 0 001 1.271v16.463c0 .147.117.266.261.266h12.474a.263.263 0 00.261-.266V5.745a.268.268 0 00-.101-.256L9.58 1.111a.26.26 0 00-.215-.109V1zm-7.844.534H9.11v4.167c0 .146.117.265.261.265h4.104v11.5H1.522V1.535zm8.11.375l3.47 3.526h-3.47V1.91z'
                              clipRule='evenodd'
                            ></path>
                            <path
                              fill='#fff'
                              d='M9.366 1h.253V.731l-.268.017.015.252zm-.039.005v.253h.027l.027-.005-.054-.248zm-8.066 0V.752v.253zM1 1.271H.747 1zm0 16.463H.747 1zm.261.266v.253V18zm12.474 0v.253V18zm.261-.266h.253-.253zm0-11.989l-.25-.04-.002.02v.02h.252zm-.101-.256l-.18.178.012.013.015.011.152-.202zM9.58 1.111l-.205.148.011.016.014.014.18-.178zm-.215-.109h-.253v.257l.257-.004-.004-.253zm-7.844.532H1.27v.253h.253v-.253zm7.587 0h.253v-.253h-.253v.253zm0 4.167h-.253.253zm.261.265v.253-.253zm4.104 0h.253v-.253h-.253v.253zm0 11.5v.253h.253v-.252h-.253zm-11.952 0H1.27v.253h.253v-.252zM9.632 1.91l.18-.178-.433-.44v.618h.252zm3.47 3.526v.253h.605l-.424-.43-.18.177zm-3.47 0h-.253v.253h.252v-.253zM9.35.748a.51.51 0 00-.077.01l.107.495-.03-.505zm-.024.004H1.261v.506h8.066V.752zm-8.066 0a.516.516 0 00-.514.519h.506c0-.005.002-.008.004-.01a.009.009 0 01.002-.003h.002V.752zm-.514.519v16.463h.506V1.271H.747zm0 16.463c0 .283.226.519.514.519v-.506H1.26l-.002-.002a.014.014 0 01-.004-.01H.747zm.514.519h12.474v-.506H1.261v.506zm12.474 0a.516.516 0 00.514-.518h-.505a.014.014 0 01-.004.01.007.007 0 01-.003.002h-.002v.506zm.514-.519V5.745h-.505v11.99h.505zm-.003-11.948a.52.52 0 00-.2-.499l-.304.404a.015.015 0 01.005.014l.5.08zm-.171-.474L9.762.934l-.36.355 4.312 4.378.36-.355zM9.787.964a.513.513 0 00-.425-.215l.008.506c.001 0 .004 0 .006.004l.41-.295zm-.168.038V1h-.506v.002h.506zm-8.097.785H9.11v-.506H1.522v.506zm7.334-.253v4.167h.506V1.534h-.506zm0 4.167c0 .282.226.518.514.518v-.506h-.002l-.002-.002a.014.014 0 01-.004-.01h-.506zm.514.518h4.104v-.506H9.37v.506zm3.851-.253v11.5h.506v-11.5h-.506zm.253 11.248H1.522v.506h11.952v-.506zm-11.699.253V1.534H1.27v15.933h.506zM1.27 1.534h.506-.506zm8.182.552l3.472 3.527.36-.355L9.812 1.73l-.36.355zm3.652 3.096H9.63v.506h3.472v-.506zm-3.219.253V1.91H9.38v3.526h.505z'
                            ></path>
                          </svg>
                        </div>
                        <div className='flex justify-center flex-col | pl-3'>
                          <h1 className='font-bold'>Service Agreement</h1>
                          <p className='text-xs text-gray-500'>32 mins ago</p>
                        </div>
                      </div>
                      <div className='bg-[#32DBBB] | px-5 py-1 | rounded-full | text-sm text-white font-bold'>
                        Final
                      </div>
                    </div>

                    <div className='fcb | mx-2 px-4 py-4 | bg-[#F8F8F8] | rounded-md'>
                      <div className='info | flex |'>
                        <div className='img | h-14 w-14 rounded-2xl overflow-hidden | bg-[#4DACF6] | fcc'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 21 17'
                            className='h-5'
                          >
                            <path
                              fill='#fff'
                              fillRule='evenodd'
                              d='M11.125 5.321a6.66 6.66 0 01.629-.309l-.003-.003a6.56 6.56 0 012.762-.605c2.484 0 4.64 1.369 5.713 3.374.494.88.774 1.886.774 2.955C21 14.194 18.062 17 14.437 17c-2.768 0-5.136-1.637-6.1-3.952H.07c-.063 0-.089-.043-.055-.098L7.816.04c.033-.054.085-.055.118 0l3.191 5.28zm.438.724a5.866 5.866 0 012.874-.744c3.142 0 5.688 2.432 5.688 5.432 0 3-2.546 5.431-5.688 5.431-2.274 0-4.236-1.274-5.146-3.116h6.39c.063 0 .087-.044.055-.098l-4.173-6.905zm2.558 6.047H1.575L7.848 1.73l6.273 10.362z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </div>
                        <div className='flex justify-center flex-col | pl-3'>
                          <h1 className='font-bold'>Brand Strategy</h1>
                          <p className='text-xs text-gray-500'>2 hours ago</p>
                        </div>
                      </div>
                      <div className='bg-[#C5C5C5] | px-5 py-1 | rounded-full | text-sm text-white font-bold'>
                        Draft
                      </div>
                    </div>

                    <div className='fcb | mx-2 px-4 py-4 | bg-[#F8F8F8] | rounded-md'>
                      <div className='info | flex |'>
                        <div className='img | h-14 w-14 rounded-2xl overflow-hidden | bg-[#674DF6] | fcc'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 15 19'
                            className='h-5'
                          >
                            <path
                              fill='#fff'
                              fillRule='evenodd'
                              d='M9.366 1a.257.257 0 00-.039.005H1.261A.263.263 0 001 1.271v16.463c0 .147.117.266.261.266h12.474a.263.263 0 00.261-.266V5.745a.268.268 0 00-.101-.256L9.58 1.111a.26.26 0 00-.215-.109V1zm-7.844.534H9.11v4.167c0 .146.117.265.261.265h4.104v11.5H1.522V1.535zm8.11.375l3.47 3.526h-3.47V1.91z'
                              clipRule='evenodd'
                            ></path>
                            <path
                              fill='#fff'
                              d='M9.366 1h.253V.731l-.268.017.015.252zm-.039.005v.253h.027l.027-.005-.054-.248zm-8.066 0V.752v.253zM1 1.271H.747 1zm0 16.463H.747 1zm.261.266v.253V18zm12.474 0v.253V18zm.261-.266h.253-.253zm0-11.989l-.25-.04-.002.02v.02h.252zm-.101-.256l-.18.178.012.013.015.011.152-.202zM9.58 1.111l-.205.148.011.016.014.014.18-.178zm-.215-.109h-.253v.257l.257-.004-.004-.253zm-7.844.532H1.27v.253h.253v-.253zm7.587 0h.253v-.253h-.253v.253zm0 4.167h-.253.253zm.261.265v.253-.253zm4.104 0h.253v-.253h-.253v.253zm0 11.5v.253h.253v-.252h-.253zm-11.952 0H1.27v.253h.253v-.252zM9.632 1.91l.18-.178-.433-.44v.618h.252zm3.47 3.526v.253h.605l-.424-.43-.18.177zm-3.47 0h-.253v.253h.252v-.253zM9.35.748a.51.51 0 00-.077.01l.107.495-.03-.505zm-.024.004H1.261v.506h8.066V.752zm-8.066 0a.516.516 0 00-.514.519h.506c0-.005.002-.008.004-.01a.009.009 0 01.002-.003h.002V.752zm-.514.519v16.463h.506V1.271H.747zm0 16.463c0 .283.226.519.514.519v-.506H1.26l-.002-.002a.014.014 0 01-.004-.01H.747zm.514.519h12.474v-.506H1.261v.506zm12.474 0a.516.516 0 00.514-.518h-.505a.014.014 0 01-.004.01.007.007 0 01-.003.002h-.002v.506zm.514-.519V5.745h-.505v11.99h.505zm-.003-11.948a.52.52 0 00-.2-.499l-.304.404a.015.015 0 01.005.014l.5.08zm-.171-.474L9.762.934l-.36.355 4.312 4.378.36-.355zM9.787.964a.513.513 0 00-.425-.215l.008.506c.001 0 .004 0 .006.004l.41-.295zm-.168.038V1h-.506v.002h.506zm-8.097.785H9.11v-.506H1.522v.506zm7.334-.253v4.167h.506V1.534h-.506zm0 4.167c0 .282.226.518.514.518v-.506h-.002l-.002-.002a.014.014 0 01-.004-.01h-.506zm.514.518h4.104v-.506H9.37v.506zm3.851-.253v11.5h.506v-11.5h-.506zm.253 11.248H1.522v.506h11.952v-.506zm-11.699.253V1.534H1.27v15.933h.506zM1.27 1.534h.506-.506zm8.182.552l3.472 3.527.36-.355L9.812 1.73l-.36.355zm3.652 3.096H9.63v.506h3.472v-.506zm-3.219.253V1.91H9.38v3.526h.505z'
                            ></path>
                          </svg>
                        </div>
                        <div className='flex justify-center flex-col | pl-3'>
                          <h1 className='font-bold'>Brand Strategy</h1>
                          <p className='text-xs text-gray-500'>5 hours ago</p>
                        </div>
                      </div>
                      <div className='bg-[#C5C5C5] | px-5 py-1 | rounded-full | text-sm text-white font-bold'>
                        Draft
                      </div>
                    </div>
                  </div>
                  <h1 className='font-bold text-base | border border-gray-300 | text-center | mt-5 mx-16 py-1 rounded-full | cursor-pointer'>
                    7 more documents
                  </h1>
                </div>
                <div className='flex'>
                  <div className='card'></div>
                  <div className='card'></div>
                </div>
              </div>
            </div>

            <div
              className='w-1/3 | grid grid-cols-2 max-h-auto overflow-hidden rounded-[1.25rem] | relative'
              style={{
                backgroundImage: `url('/storage/12.png')`,
                backgroundPosition: 'center bottom',
              }}
            >
              <div
                className='absolute inset-0 z-40'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(30, 24, 60, 0.0001) 76.36%, #000000 100%)',
                }}
              ></div>
              <div className='absolute bottom-0 inset-x-0 | z-50 | px-10 pb-10'>
                <h1 className='font-extrabold text-xl text-white | pb-7'>
                  Behind the Scenes{' '}
                </h1>

                <div className='progress | bg-gray-400 bg-opacity-50 | relative h-1.5'>
                  <div className='bg-white h-full w-1/3 rounded-full'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
