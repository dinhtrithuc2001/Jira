import React from 'react'
import { Breadcrumb, Input, Tooltip, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Board() {
    return (
        <div className='board' style={{backgroundSize: '100%'}}>
            <Breadcrumb className='font-medium' style={{ fontSize: 15, color: '#5e6c84' }}>
                <Breadcrumb.Item>Projects</Breadcrumb.Item>
                <Breadcrumb.Item>React Jira Clone</Breadcrumb.Item>
                <Breadcrumb.Item>Board</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className='my-3 font-medium text-2xl'>Kanban board</h2>
            <div className='w-[60%] flex mt-4'>
                <Input size="large" className='shrink-0 w-[40%]' prefix={<SearchOutlined />} />
                <div className='flex ml-4 flex-row-reverse member'>
                    <div className='item w-[35px] h-[35px] rounded-full cursor-pointer inline-flex ml-[-2px]'>
                        <Tooltip mouseLeaveDelay={0} mouseEnterDelay={0} placement="bottom" title='Iron Man'>
                            <img className='rounded-full w-full' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg" />
                        </Tooltip>
                    </div>
                    <div className='item w-[35px] h-[35px] rounded-full cursor-pointer inline-flex ml-[-2px]'>
                        <Tooltip mouseLeaveDelay={0} mouseEnterDelay={0} placement="bottom" title='Captain'>
                            <img className='rounded-full w-full' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" />
                        </Tooltip>
                    </div>
                    <div className='item w-[35px] h-[35px] rounded-full cursor-pointer inline-flex ml-[-2px]'>
                        <Tooltip mouseLeaveDelay={0} mouseEnterDelay={0} placement="bottom" title='Spider Man'>
                            <img className='rounded-full w-full' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg" />
                        </Tooltip>
                    </div>
                </div>
                <div className='ml-4'>
                    <Button type='text' className='w-[150px] font-semibold text-[#484848] tracking-wider'>Only My Issues</Button>
                </div>
                <div className='ml-4'>
                    <Button type='text' className='w-[150px] font-semibold text-[#484848] tracking-wider'>Ignore Resolved</Button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-6'>
                {/* BACKLOG 2 */}
                <div className='bg-[#f4f5f7] px-2 rounded-sm min-h-[400px]'>
                    <h2 className='text-[14px] px-2 py-3 text-[#3b3b3b]'>BACKLOG 2</h2>
                    <div className='flex flex-col'>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Try leaving a comment on this issue.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-square-check text-[#4fade6]"></i>
                                    <i className="fa-solid fa-arrow-up ml-2 text-[13.5px] text-[#e97f33]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Click on an issue to see what's behind it.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-square-check text-[#4fade6]"></i>
                                    <i className="fa-solid fa-arrow-down ml-2 text-[13.5px] text-[#2d8738]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SELECTED FOR DEVELOPMENT 2 */}
                <div className='bg-[#f4f5f7] px-2 rounded-sm min-h-[400px]'>
                    <h2 className='text-[14px] px-2 py-3 text-[#3b3b3b]'>SELECTED FOR DEVELOPMENT 2</h2>
                    <div className='flex flex-col'>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Each issue can be assigned priority from lowest to highest.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-square-check text-[#4fade6]"></i>
                                    <i className="fa-solid fa-arrow-up ml-2 text-[13.5px] text-[#cd1317]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Try dragging issues to different columns to transition their status.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-bookmark text-[#65ba43]"></i>
                                    <i className="fa-solid fa-arrow-up ml-2 text-[13.5px] text-[#e97f33]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* IN PROGRESS 2 */}
                <div className='bg-[#f4f5f7] px-2 rounded-sm min-h-[400px]'>
                    <h2 className='text-[14px] px-2 py-3 text-[#3b3b3b]'>IN PROGRESS </h2>
                    <div className='flex flex-col'>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Try leaving a comment on this issue.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-square-check text-[#4fade6]"></i>
                                    <i className="fa-solid fa-arrow-up ml-2 text-[13.5px] text-[#e97f33]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Click on an issue to see what's behind it.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-square-check text-[#4fade6]"></i>
                                    <i className="fa-solid fa-arrow-down ml-2 text-[13.5px] text-[#2d8738]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DONE 2 */}
                <div className='bg-[#f4f5f7] px-2 rounded-sm min-h-[400px]'>
                    <h2 className='text-[14px] px-2 py-3 text-[#3b3b3b]'>DONE 2</h2>
                    <div className='flex flex-col'>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Each issue can be assigned priority from lowest to highest.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-square-check text-[#4fade6]"></i>
                                    <i className="fa-solid fa-arrow-up ml-2 text-[13.5px] text-[#cd1317]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-md p-3 cursor-pointer hover:bg-[#ebecf0] shadow-md mb-2'>
                            <p className='text-[15px] font-medium text-[#303030] '>Try dragging issues to different columns to transition their status.</p>
                            <div className='flex items-center justify-between' >
                                <div>
                                    <i className="fa-solid fa-bookmark text-[#65ba43]"></i>
                                    <i className="fa-solid fa-arrow-up ml-2 text-[13.5px] text-[#e97f33]"></i>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <img className='rounded-full w-full w-[26px] h-[24px] ml-[-2px]' src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" alt="https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/captain_e8s9nk.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
