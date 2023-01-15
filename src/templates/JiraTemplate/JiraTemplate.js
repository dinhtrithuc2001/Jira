import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NotFound from '../../pages/NotFound'
import { getLocalStorage, removeLocalstorage } from '../../utils/config'
import { setStatusLogin } from '../../redux/reducers/UserReducer'
import { LOCALSTORAGE_USER } from '../../utils/constant'
import { Layout, Menu } from 'antd';
import NotFoundDevice from '../../components/NotFoundDevice'

const { Content, Sider } = Layout;


export default function JiraTemplate() {

    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.UserReducer.isLogin)


    useEffect(() => {
        if (getLocalStorage(LOCALSTORAGE_USER)) {
            dispatch(setStatusLogin(true))
        } else {
            removeLocalstorage(LOCALSTORAGE_USER)
            dispatch(setStatusLogin(false))
        }

    }, [])

    return <>
        {isLogin ? <>
            <div className='block md:hidden'>
                    <NotFoundDevice />
            </div>
            <div className='jira hidden md:block'>
                <div className="sideBar">
                    <div className='sideBar__menu'>
                        <a href="#" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.76 75.76" width={28}><defs><linearGradient id="linear-gradient" x1="34.64" y1="15.35" x2={19} y2="30.99" gradientUnits="userSpaceOnUse"><stop offset="0.18" stopColor="rgba(0, 82, 204, 0.2)" /><stop offset={1} stopColor="#DEEBFE" /></linearGradient><linearGradient id="linear-gradient-2" x1="38.78" y1="60.28" x2="54.39" y2="44.67" xlinkHref="#linear-gradient" /></defs><title>Jira Software-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue"><path d="M72.4,35.76,39.8,3.16,36.64,0h0L12.1,24.54h0L.88,35.76A3,3,0,0,0,.88,40L23.3,62.42,36.64,75.76,61.18,51.22l.38-.38L72.4,40A3,3,0,0,0,72.4,35.76ZM36.64,49.08l-11.2-11.2,11.2-11.2,11.2,11.2Z" style={{ fill: 'rgb(222, 235, 254)' }} /><path d="M36.64,26.68A18.86,18.86,0,0,1,36.56.09L12.05,24.59,25.39,37.93,36.64,26.68Z" style={{ fill: 'url("#linear-gradient")' }} /><path d="M47.87,37.85,36.64,49.08a18.86,18.86,0,0,1,0,26.68h0L61.21,51.19Z" style={{ fill: 'url("#linear-gradient-2")' }} /></g></g></svg>
                        </a>

                        <div className='flex items-center hover:bg-sky-700 relative pl-[23px] py-[12px] cursor-pointer sideBar__item'>
                            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 20 }}></i>
                            <div className='uppercase text-gray-200 tracking-wide font-bold text-[13px] left-4 relative sideBar__content'>Search issues</div>
                        </div>

                        <div className='flex items-center hover:bg-sky-700 relative pl-[23px] py-[12px] cursor-pointer sideBar__item'>
                            <i className="fa-solid fa-plus" style={{ fontSize: 22 }}></i>
                            <div className='uppercase text-gray-200 tracking-wide font-bold text-[13px] left-4 relative sideBar__content'>Create issues</div>
                        </div>

                        <div className='flex items-center hover:bg-sky-700 absolute bottom-5 pl-[23px] py-[12px] cursor-pointer sideBar__item'>
                            <i className="fa-regular fa-circle-question" style={{ fontSize: 22 }}></i>
                            <div className='uppercase text-gray-200 tracking-wide font-bold text-[13px] left-4 relative sideBar__content'>About</div>
                        </div>
                    </div>
                </div>

                <Layout>
                    <Sider width={230} className='hidden lg:block' >
                        <div className='flex py-[24px] px-[4px] logo'>
                            <svg width={40} height={40} viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 3 }}><defs><rect id="path-1" x={0} y={0} width={128} height={128} /></defs><g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="project_avatar_settings"><g><mask id="mask-2" fill="white"><use xlinkHref="#path-1" /></mask><use id="Rectangle" fill="#FF5630" xlinkHref="#path-1" /><g id="Settings" fillRule="nonzero"><g transform="translate(20.000000, 17.000000)"><path d="M74.578,84.289 L72.42,84.289 C70.625,84.289 69.157,82.821 69.157,81.026 L69.157,16.537 C69.157,14.742 70.625,13.274 72.42,13.274 L74.578,13.274 C76.373,13.274 77.841,14.742 77.841,16.537 L77.841,81.026 C77.842,82.82 76.373,84.289 74.578,84.289 Z" id="Shape" fill="#2A5083" /><path d="M14.252,84.289 L12.094,84.289 C10.299,84.289 8.831,82.821 8.831,81.026 L8.831,16.537 C8.831,14.742 10.299,13.274 12.094,13.274 L14.252,13.274 C16.047,13.274 17.515,14.742 17.515,16.537 L17.515,81.026 C17.515,82.82 16.047,84.289 14.252,84.289 Z" id="Shape" fill="#2A5083" /><rect id="Rectangle-path" fill="#153A56" x="8.83" y="51.311" width="8.685" height="7.763" /><path d="M13.173,53.776 L13.173,53.776 C6.342,53.776 0.753,48.187 0.753,41.356 L0.753,41.356 C0.753,34.525 6.342,28.936 13.173,28.936 L13.173,28.936 C20.004,28.936 25.593,34.525 25.593,41.356 L25.593,41.356 C25.593,48.187 20.004,53.776 13.173,53.776 Z" id="Shape" fill="#FFFFFF" /><path d="M18.021,43.881 L8.324,43.881 C7.453,43.881 6.741,43.169 6.741,42.298 L6.741,41.25 C6.741,40.379 7.453,39.667 8.324,39.667 L18.021,39.667 C18.892,39.667 19.604,40.379 19.604,41.25 L19.604,42.297 C19.605,43.168 18.892,43.881 18.021,43.881 Z" id="Shape" fill="#2A5083" opacity="0.2" /><rect id="Rectangle-path" fill="#153A56" x="69.157" y="68.307" width="8.685" height="7.763" /><path d="M73.499,70.773 L73.499,70.773 C66.668,70.773 61.079,65.184 61.079,58.353 L61.079,58.353 C61.079,51.522 66.668,45.933 73.499,45.933 L73.499,45.933 C80.33,45.933 85.919,51.522 85.919,58.353 L85.919,58.353 C85.919,65.183 80.33,70.773 73.499,70.773 Z" id="Shape" fill="#FFFFFF" /><path d="M78.348,60.877 L68.651,60.877 C67.78,60.877 67.068,60.165 67.068,59.294 L67.068,58.247 C67.068,57.376 67.781,56.664 68.651,56.664 L78.348,56.664 C79.219,56.664 79.931,57.377 79.931,58.247 L79.931,59.294 C79.931,60.165 79.219,60.877 78.348,60.877 Z" id="Shape" fill="#2A5083" opacity="0.2" /><path d="M44.415,84.289 L42.257,84.289 C40.462,84.289 38.994,82.821 38.994,81.026 L38.994,16.537 C38.994,14.742 40.462,13.274 42.257,13.274 L44.415,13.274 C46.21,13.274 47.678,14.742 47.678,16.537 L47.678,81.026 C47.678,82.82 46.21,84.289 44.415,84.289 Z" id="Shape" fill="#2A5083" /><rect id="Rectangle-path" fill="#153A56" x="38.974" y="23.055" width="8.685" height="7.763" /><path d="M43.316,25.521 L43.316,25.521 C36.485,25.521 30.896,19.932 30.896,13.101 L30.896,13.101 C30.896,6.27 36.485,0.681 43.316,0.681 L43.316,0.681 C50.147,0.681 55.736,6.27 55.736,13.101 L55.736,13.101 C55.736,19.932 50.147,25.521 43.316,25.521 Z" id="Shape" fill="#FFFFFF" /><path d="M48.165,15.626 L38.468,15.626 C37.597,15.626 36.885,14.914 36.885,14.043 L36.885,12.996 C36.885,12.125 37.597,11.413 38.468,11.413 L48.165,11.413 C49.036,11.413 49.748,12.125 49.748,12.996 L49.748,14.043 C49.748,14.913 49.036,15.626 48.165,15.626 Z" id="Shape" fill="#2A5083" opacity="0.2" /></g></g></g></g></g></svg>
                            <div className='ml-2'>
                                <div className='font-semibold' style={{ color: '#42526e', fontSize: 15 }}>React Jira Clone</div>
                                <div className='text-[13px] text-gray-600 font-medium pt-1'>Software project</div>
                            </div>
                        </div>
                        <Menu
                            style={{ background: '#f4f5f7', border: 'none' }}
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <i className="fa-solid fa-credit-card mr-1 text-[1.1rem]"></i>,
                                    label: <NavLink to='board'>Kanban Board</NavLink>,
                                },
                                {
                                    key: '2',
                                    icon: <i className="fa-solid fa-gear mr-1 text-[1.1rem]"></i>,
                                    label: <NavLink to='create'>Create Project</NavLink>,
                                },

                            ]}
                        />
                        <hr className='my-2' />

                        <div className='px-[4px] menu__bot'>
                            <div className='flex items-center py-[15px] px-[16px] menu__bot__item hover:cursor-not-allowed' >
                                <i className="fa-solid fa-truck mr-3 text-[1rem]"></i>
                                <div>
                                    <span className='text-show-menu text-[14px]'>Releases</span>
                                    <span className='text-hidden-menu text-[12px] font-semibold'>NOT IMPLEMENTED</span>
                                </div>
                            </div>
                            <div className='flex items-center py-[15px] px-[16px] menu__bot__item hover:cursor-not-allowed' >
                                <i className="fa-solid fa-equals mr-3 text-[1.1rem]"></i>
                                <div>
                                    <span className='text-show-menu text-[14px] ml-1'>Issues and filters</span>
                                    <span className='text-hidden-menu text-[12px] font-semibold'>NOT IMPLEMENTED</span>
                                </div>

                            </div>
                            <div className='flex items-center py-[15px] px-[16px] menu__bot__item hover:cursor-not-allowed' >
                                <i className="fa-solid fa-paste mr-3 text-[1.1rem]"></i>
                                <div>
                                    <span className='text-show-menu text-[14px]'>Pages</span>
                                    <span className='text-hidden-menu text-[12px] font-semibold'>NOT IMPLEMENTED</span>
                                </div>
                            </div>
                            <div className='flex items-center py-[15px] px-[16px] menu__bot__item hover:cursor-not-allowed' >
                                <i className="fa-solid fa-location-arrow mr-3 text-[1.1rem]"></i>
                                <div>
                                    <span className='text-show-menu text-[14px] '>Reports</span>
                                    <span className='text-hidden-menu text-[12px] font-semibold'>NOT IMPLEMENTED</span>
                                </div>
                            </div>
                            <div className='flex items-center py-[15px] px-[16px] menu__bot__item hover:cursor-not-allowed' >
                                <i className="fa-solid fa-box mr-3 text-[1.1rem]"></i>
                                <div>
                                    <span className='text-show-menu text-[14px] '>Components</span>
                                    <span className='text-hidden-menu text-[12px] font-semibold'>NOT IMPLEMENTED</span>
                                </div>
                            </div>
                        </div>
                    </Sider>
                    <Layout className="site-layout ml-[65px] lg:ml-[0]">
                        <Content
                            style={{
                                padding: '24px 16px 24px 1.8rem',
                                minHeight: 280,
                                background: 'white',
                            }}
                        >
                            <Outlet style={{
                                backgroundSize: '100%'
                            }} />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </> : <NotFound />}
    </>
}

