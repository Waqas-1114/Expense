import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

import MyModal from '../AddPlan/AddPlan';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const Body = () => {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeModal = () => setShowModal(false);

    const handleTrans = () => {
        navigate('/add-trans'); // Redirect to the add-plan page
    };
    const handlePlans = () => {
        navigate('/add-plans'); // Redirect to the add-plan page
    };

    const [isExpandedDialogOpen, setIsExpandedDialogOpen] = useState(false);
    const toggleExpandedDialog = () => {
        setIsExpandedDialogOpen(!isExpandedDialogOpen);
    };



    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: '',
                data: [650, 590, 800, 810, 560, 550, 400, 620, 543, 740, 800, 300],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.2,
            },
            {
                label: '',
                data: [450, 730, 870, 710, 760, 650, 500, 490, 750, 700, 900],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.2,
                pointBackgroundColor: 'rgb(255, 99, 132)', // Optional: color for the points
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false

            },

            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Value: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,

                },
                ticks: {
                    padding: 8,
                    font: {

                        family: 'Arial',
                        size: 12,
                        weight: 'bold',


                    }
                },
            },
            y: {
                grid: {
                    borderDash: [5, 5],

                },
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return `${value}k`
                    }
                },
            },
        },
    };

    return (
        <>
            <div className="border lg:flex-row gap-4 flex bg-purple-50">
                <div className="w-full w-4/6 mt-3 ml-4">
                    <div className="flex items-center gap-3 mb-6">
                        <img src="./assets/logo.png" className="w-14 h-14 rounded-full" />
                        <div>
                            <h1 className=""> Good Morning <span className="font-bold ">Jane Cooper</span></h1>
                            <p className="text-xs font-thin ">Let's analyse your expenses</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-3">


                        <div className="w-80 p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-lg shadow flex justify-between items-center w-200">
                            <div>
                                <div className="bg-white text-blue-600 px-2 py-1 rounded-full text-sm font-medium w-14">
                                    +8.8%
                                </div>
                                <p className="mt-2 text-gray-600 font-medium">Total revenue</p>
                                <p className="mt-1 text-2xl font-bold text-gray-900">$320,000</p>
                            </div>
                            <div>

                                <svg className="w-16 h-12" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20 C 10 10, 20 30, 30 20 S 40 40, 50 30, 60 10, 70 20, 80 30, 90 10, 100 20" stroke="blue" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>



                        <div className="w-80 p-4 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 rounded-lg shadow flex justify-between items-center w-200">
                            <div>
                                <div className="bg-white text-red-600 px-2 py-1 rounded-full text-sm font-medium w-14">
                                    +9.1%
                                </div>
                                <p className="mt-2 text-gray-600 font-medium">Total expense</p>
                                <p className="mt-1 text-2xl font-bold text-gray-900">$291,800</p>
                            </div>
                            <div>

                                <svg className="w-16 h-12" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20 C 10 10, 20 30, 30 20 S 40 40, 50 30, 60 10, 70 20, 80 30, 90 10, 100 20" stroke="red" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div
                            className="w-80 p-4 bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 rounded-lg shadow flex justify-between items-center w-200 cursor-pointer"
                            onClick={toggleExpandedDialog}
                        >
                            <div>
                                <div className="bg-white text-green-800 px-2 py-1 rounded-full text-sm font-medium w-14">
                                    +8.8%
                                </div>
                                <p className="mt-2 text-gray-600 font-medium">Total savings</p>
                                <p className="mt-1 text-2xl font-bold text-gray-900">$8,200</p>
                            </div>
                            <div>
                                <svg className="w-16 h-12" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20 C 10 10, 20 30, 30 20 S 40 40, 50 30, 60 10, 70 20, 80 30, 90 10, 100 20" stroke="#4B5563" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>
                        {isExpandedDialogOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                    <h2 className="text-lg font-bold">Detailed Information</h2>
                                    <p className="mt-4 font-semibold">Here's a tip:
                                        <span className="font-normal">U have saved 8.834% more than previous month.
                                            Try spending less money on russians.</span>
                                    </p>
                                    <p className="mt-2 text-gray-600 flex">Total Savings: $8,200<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3 text-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>

                                    </span></p>
                                    <p className="mt-2 text-gray-600">Growth: <span className="text-green-500">8.8%</span></p>
                                    <button
                                        onClick={toggleExpandedDialog}
                                        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}


                    </div>


                    <div className=" w-full  p-4 bg-white rounded-lg shadow-md">
                        <div className="font-bold flex pb-4 items-center">
                            <p className="text-xl">Analysis</p>
                            <div className="flex justify-between gap-2 absolute left-1/3">
                                <div className="flex items-center gap-1"> <div className="bg-red-400 rounded-3xl w-4 h-4  "></div><p className="text-gray-500">Expense</p></div>
                                <div className="flex items-center gap-1"> <div className="bg-green-400 rounded-3xl w-4 h-4 "></div><p className="text-gray-500">Savings</p></div>
                            </div>


                        </div>
                        <Line data={data} options={options} />
                    </div>

                    <div className="min-w-full max-h-full bg-white mt-4 shadow-lg mb-7 rounded-xl overflow-x-auto">
                        <div className="flex justify-between px-4 py-4 items-center">
                            <div className="font-bold text-xl">Transaction history</div>
                            <div className="flex gap-2">
                                <button className="bg-gray-100 hover:bg-gray-200 border p-2 rounded-xl border-solid border-gray-400 hover:border-black text-gray-500 hover:text-black font-semibold">Newest</button>
                                <button className="bg-gray-100 hover:bg-gray-200 border p-2 rounded-xl border-solid border-gray-400 hover:border-black  text-gray-500 hover:text-black  font-semibold">Oldest</button>
                            </div>
                        </div>
                        <table className="min-w-full ">
                            <thead >
                                <tr >
                                    <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Transition
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="min-w-full">
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 flex items-center ">
                                        <img src="./assets/upwork.png" className="w-10 h-10 rounded-full" />
                                        Upwork
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                                        Freelancing
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm  font-semibold  text-gray-700">
                                        $150.00
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-gray-700">
                                        14 Aug,2023
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-green-500">
                                        Credited
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 flex items-center gap-1">
                                        <img src="./assets/blinkit1.png" className="w-9 h-9 rounded-full " />
                                        Blinkit
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                                        Groceries
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm  font-semibold  text-gray-700">
                                        $50.99
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-gray-700">
                                        14 Aug,2023
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-red-500">
                                        Debited
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 flex items-center ">
                                        <img src="./assets/fiverr.png" className="w-10 h-9 rounded-full" />
                                        Fiverr
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                                        Freelancing
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm  font-semibold  text-gray-700">
                                        $200.00
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-gray-700">
                                        13 Aug,2023
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-green-500">
                                        Credited
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 flex items-center  gap-1">
                                        <img src="./assets/Nike.png" className="w-9 h-9 rounded-full" />
                                        Nike
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                                        Clothing
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm  font-semibold  text-gray-700">
                                        $178.00
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-gray-700">
                                        12 Aug,2024
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-red-500">
                                        Debited
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 flex items-center gap-1 ">
                                        <img src="./assets/netflix.png" className="w-9 h-9 rounded-full" />
                                        Netflix
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                                        Entertainment
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm  font-semibold  text-gray-700">
                                        $19.99
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-gray-700">
                                        11 Aug,2024
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold  text-red-500">
                                        Debited
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="float-right px-3 py-3 font-bold text-gray-500 "><span className="font-bold text-gray-700 px-2 "></span>Add</button>



                    </div>
                </div>
                <div className="w-full ">
                    <div className="border px-4  ">
                        <div className="flex justify-between items-center pb-2 mt-5">
                            <h1 className="font-bold">My Card</h1>
                            <div className="flex gap-3">
                                <button className="cursor font-bold">+</button>
                                <p>Add Card</p>
                            </div>

                        </div>

                        <div>
                            <div className="bg-black text-white rounded-xl p-6 lg:shadow w-full w-23 mb-3 ">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <p className="text-sm font-semibold">John Smith</p>
                                    </div>
                                    <div className="relative w-9 h-8 ">

                                        <div className="absolute top-0 left-0 w-7 h-7 bg-gray-500 rounded-full"></div>

                                        <div className="absolute top-0 left-4 w-7 h-7 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-lg tracking-widest font-mono">4143 **** **** 6262</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs">Valid Thru</p>
                                        <p className="text-sm font-semibold">12/25</p>
                                    </div>
                                    <div>
                                        <p className="text-xs">Balance</p>
                                        <p className="text-lg font-semibold">$423,007</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="border-l border-b-0 px-4 py-5 ">
                        <div className="flex justify-between">
                            <h1 className="font-bold"> Saving Plan</h1>
                            
                        </div>
                        <div className="flex-col gap-3 mt-3 mb-3 ">
                            <div className="h-36 max-w-sm bg-white rounded-2xl mb-3 border px-4 ">
                                <div className="flex justify-between py-1 ">
                                    <div className="flex gap-2 items-center mt-3">
                                        <div className="bg-gray-300 py-2 px-2 rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M.383 9.258c-.158 0-.282.068-.338.182c-.068.114-.057.262.022.387l.17.296c.09.16.214.182.304.205c.08.012.136.023.192.137l.158.273c.125.228.26.25.362.273c.079.012.158.023.259.205s.249.456.621.569c.034.012 3.601 1.059 3.613 1.059c.373.126.474.262.587.433c.068.102.26.376.711.501l3.432.933a.7.7 0 0 0 .711-.182l.621-.592c.091-.08.136-.114.192-.114c.057 0 .102.034.192.114l.621.592c.113.091.339.273.712.182l3.431-.933c.463-.125.644-.399.711-.501c.113-.171.215-.319.587-.433c0 0 3.568-1.047 3.613-1.059c.361-.113.52-.387.621-.569c.102-.182.169-.193.248-.205c.102-.023.249-.045.373-.273l.158-.273c.068-.114.113-.125.192-.137c.09-.023.214-.046.305-.205l.169-.296c.079-.136.091-.273.023-.387a.39.39 0 0 0-.339-.182h-9.675c-.158 0-.406 0-.666.262a1 1 0 0 0-.169.239c-.079.148-.136.25-.407.25h-1.411c-.26 0-.327-.102-.406-.25a1 1 0 0 0-.17-.239c-.259-.262-.508-.262-.666-.262zm.001.239h9.675c.146 0 .316 0 .497.193c.112.114.146.24.248.365H.812c-.293 0-.327 0-.417-.137l-.124-.216c-.034-.057-.045-.114-.023-.148c.023-.034.068-.057.136-.057m13.569 0h9.675c.068 0 .113.023.136.057a.2.2 0 0 1-.023.148l-.124.216c-.09.137-.124.137-.418.137h-9.991c.102-.125.136-.251.248-.365c.192-.193.351-.193.497-.193m-7.304.74h10.702v1.708H6.649zm10.894.023h5.566c-.023.034-.034.057-.056.08c0 0-.09.148-.124.227c-.136.217-.204.216-.587.182l-4.799-.284zm-16.641.011h5.566v.205l-4.798.285c-.383.022-.451.034-.587-.182l-.124-.228c-.023-.034-.045-.057-.057-.08m7.354.311a.34.34 0 0 0-.219.077a.3.3 0 0 0-.09.204c0 .126.067.217.203.285c.147.068.214.091.248.137a.115.115 0 0 1-.011.171a.25.25 0 0 1-.135.034a.45.45 0 0 1-.294-.125l.011.182q.129.065.271.079a.44.44 0 0 0 .26-.079c.124-.091.124-.285.045-.376c-.056-.08-.147-.114-.316-.205c-.079-.045-.113-.08-.113-.137c0-.113.147-.147.282-.102a.4.4 0 0 1 .124.068l-.011-.171l-.113-.034c-.011 0-.07-.011-.142-.008m.368.008l-.011.148c.124-.012.214-.023.293-.023v.865h.192v-.865c.046 0 .136 0 .294.023l-.011-.148zm1.264 0c-.293 0-.496.205-.496.512c0 .296.203.513.496.513c.294 0 .497-.217.497-.513c0-.307-.203-.512-.497-.512m4.957 0l-.012.148c.124-.012.215-.023.294-.023v.877v-.012h.192v-.865c.045 0 .135 0 .293.023l-.011-.148zm-.508.011c-.102 0-.17 0-.226.011v.991h.192v-.421h.067l.305.421h.226l-.35-.444a.3.3 0 0 0 .158-.103a.34.34 0 0 0 .057-.17c0-.148-.113-.217-.204-.251a.6.6 0 0 0-.225-.034m-6.932 0l-.418.991h.169l.102-.251h.373l.09.251h.215l-.418-.991zm3.138 0v.991h.136v-.672l.587.672h.102v-.991h-.136v.672l-.587-.672zm1.468 0l-.111.979h.156l.057-.603l.282.569h.09l.271-.569l.056.615h.204l-.113-.991h-.102l-.338.695l-.35-.695zm-.111.979h-.002v.012zm1.601-.979l-.417.991h.169l.101-.251h.373l.09.251h.215l-.418-.991zm2.235 0v.991h.192v-.991zm.384 0v.991h.136v-.672l.587.672h.102v-.991h-.136v.672l-.587-.672zm-9.652.091v.251l-3.985.455c-.429.046-.519.057-.654-.137a2 2 0 0 1-.102-.159c-.023-.046-.045-.091-.079-.125c.09-.012.192-.012.226-.012zm11.064 0l4.595.273c.034 0 .124.012.226.012c-.023.034-.057.08-.079.125a2 2 0 0 1-.102.159c-.135.194-.226.183-.655.137l-3.985-.455zm-7.644 0c.068 0 .114.011.159.046c.135.114.135.33.135.352c0 .274-.136.399-.294.399c-.146 0-.282-.125-.293-.398c0-.205.09-.399.293-.399m4.415.023h.067c.113 0 .204.046.204.171c0 .08-.046.171-.204.171c-.022 0-.056-.012-.078-.012h.011zm-6.887.136l.147.376h-.282zm6.096.001l.147.375h-.282zm4.043.318l4.03.455l-.824.24c-.226.056-.429.034-.745-.023l-2.461-.41zm-11.087 0v.262l-2.461.41c-.327.057-.531.08-.745.023l-.824-.239zm0 .478v.331l-.925.238c-.283.069-.452.103-.587.103c-.192 0-.305-.045-.994-.25zm11.064 0l2.506.422c-.688.205-.801.25-.993.25c-.135 0-.305-.023-.587-.102l-.926-.24zm-9.449.479h.768c-.463.341-1.163.853-1.468 1.07a.85.85 0 0 1-.486.182c-.18 0-.259-.08-.361-.239c-.056-.068-.113-.148-.18-.217c.045-.011.09-.011.135-.034c.271-.079.666-.284 1.592-.762m1.14 0h.643a67 67 0 0 1-1.309 1.389c-.113.113-.271.273-.508.273c-.09 0-.079 0-.903-.228c.158-.045.293-.137.361-.182c.373-.251 1.31-.945 1.716-1.252m.937 0h.587c-.327.557-.768 1.297-.959 1.605c-.091.148-.249.376-.542.376c-.113.011-.125-.001-.836-.194c.147-.08.248-.182.294-.239a75 75 0 0 0 1.456-1.548m.836 0h.53a80 80 0 0 1-.621 1.912c-.067.182-.158.41-.418.41c-.09.011-.067.012-.88-.216c.203-.125.327-.319.361-.387c.226-.353.745-1.23 1.028-1.719m3.149 0h.644a58 58 0 0 0 1.716 1.252c.068.045.203.125.361.182c-.834.228-.813.228-.903.228c-.226 0-.395-.16-.508-.273a66 66 0 0 1-1.31-1.389m2.258 0h.836l1.174.296c.079.022.158.034.225.056c-.666.205-.767.228-.88.228c-.214 0-.497-.148-1.355-.58m-9.63.011h.836c-.858.432-1.141.581-1.355.581c-.124-.012-.226-.035-.88-.228c.067-.011.146-.034.225-.057zm4.99 0h.486c.124.398.564 1.787.643 1.992a.9.9 0 0 0 .136.274c-.012-.012-.034-.023-.046-.035l-.62-.592c-.102-.091-.204-.182-.35-.182c-.147 0-.26.091-.351.182l-.62.592c-.023.012-.045.023-.057.035c.045-.057.079-.137.136-.274c.079-.205.519-1.605.643-1.992m.711 0h.531q.504.866 1.027 1.719c.046.069.158.262.362.387c-.813.216-.791.216-.881.216c-.259 0-.35-.227-.418-.409c-.079-.205-.496-1.549-.621-1.913m.791 0h.587c.372.399 1.151 1.229 1.456 1.548c.045.046.147.148.294.239c-.723.182-.723.194-.836.194c-.293 0-.451-.228-.542-.376a96 96 0 0 1-.959-1.605m1.896 0h.768c.937.467 1.332.683 1.592.763l.135.034c-.079.057-.124.136-.18.216c-.102.16-.181.239-.361.239c-.17 0-.339-.079-.486-.182a76 76 0 0 1-1.468-1.07" /></svg>
                                        </div>
                                        <div className="flex-col gap-1">
                                            <h1 className="font-bold text-sm">Aston-M-DB-007</h1>
                                            <p className="font-thin text-sm">Target: $3,221,000</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="font-bold text-2xl cursor-pointer">...</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p class="text-base font-semibold text-gray-800">Saving: $17,563</p>
                                    <div class="w-full bg-teal-100 rounded-full h-2 mt-2">
                                        <div class="bg-teal-400 h-2 rounded-full w-9/12"></div>
                                    </div>

                                </div>
                            </div>
                            <div className="h-36 max-w-sm bg-white rounded-2xl mb-3 border px-4 ">
                                <div className="flex justify-between py-1 ">
                                    <div className="flex gap-2 items-center mt-3">
                                        <div className="bg-gray-300 py-2 px-2 rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z" /></svg>
                                        </div>
                                        <div className="flex-col gap-1">
                                            <h1 className="font-bold text-sm">Ethereum-T</h1>
                                            <p className="font-thin text-sm">Target: $210,000</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="font-bold text-2xl cursor-pointer">...</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p class="text-base font-semibold text-gray-800">Saving: $159,987</p>
                                    <div class="w-full bg-blue-200 rounded-full h-2 mt-2">
                                        <div class="bg-blue-400 h-2 rounded-full w-11/12"></div>
                                    </div>

                                </div>
                            </div>

                            <div className="h-36 max-w-sm bg-white rounded-2xl mb-3 border px-4">
                                <div className="flex justify-between py-1">
                                    <div className="flex gap-2 items-center mt-3">
                                        <div className="bg-gray-300 py-2 px-2 rounded-xl">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="2em"
                                                height="2em"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M254.84 255.64a127.867 127.867 0 1 0 61.614 76.03a127.04 127.04 0 0 0-61.615-76.03zm-31.233 212.62a103.9 103.9 0 0 1-79.58-8.33a104.52 104.52 0 1 1 79.58 8.33m54.65-125.248a87.963 87.963 0 1 0-59.328 109.373a87.414 87.414 0 0 0 59.327-109.373zm-37.1 38.962a8.28 8.28 0 0 1-9.56 6.747l-37.256-6.436a8 8 0 0 1-.827-.186h-.124a8 8 0 0 1-.88-.32l-.24-.104a8 8 0 0 1-.9-.487h-.07l-59.174-37.244a8.28 8.28 0 0 1 8.817-14.012l57.755 36.324l35.67 6.158a8.28 8.28 0 0 1 6.76 9.562zm164.75-76.838c10.09 34.016 15.046 67.203 13.94 93.478c-1.12 26.69-8.156 38.176-14.365 40.018c-6.21 1.842-18.368-3.943-33.87-25.706c-15.244-21.42-29.194-51.95-39.325-85.955c-22.53-75.947-14.933-128.942.424-133.495c15.36-4.553 50.668 35.703 73.197 111.66zm-25.8-95.517a137 137 0 0 0-12.914-15.772q13.712 4.625 26.42 16.65c19.124 18.13 35.33 48.71 44.498 83.886c8.963 34.512 10.35 69.884 3.85 97.06a100 100 0 0 1-6.405 18.523c.362-3.322.632-6.86.797-10.67c1.17-28.044-4.015-63.126-14.612-98.88s-25.354-67.98-41.632-90.798zM357.104 16.1h-16.868v.125a8.77 8.77 0 0 1-.518 6.737a8.77 8.77 0 0 1-5.174 4.398a8.84 8.84 0 0 1-11.125-5.65l-1.748-5.61h-17.417l3.508 10.743c.094.29.218.56.322.838a25.17 25.17 0 0 0-11.456 10.35l-11.383 19.662a25.3 25.3 0 0 0-3.322 10.576a25.5 25.5 0 0 0-7.864 1.263l-19.662 6.437a25.2 25.2 0 0 0-7.358-11.59l-16.92-15.16a25.2 25.2 0 0 0-18.327-6.458a26 26 0 0 0-2.992.34a25.426 25.426 0 0 0-24.464-18.627H161.64a25.416 25.416 0 0 0-25.096 21.64a25.6 25.6 0 0 0-5.38.175a25.22 25.22 0 0 0-16.755 9.84l-13.692 18.11a25.416 25.416 0 0 0 3.177 34.08a25.36 25.36 0 0 0-4.036 22.435l6.456 21.732a25.24 25.24 0 0 0 9.17 13.11a32.267 32.267 0 0 0 25.933 51.496h1.19l4.273 14.395a152 152 0 0 1 5.91-1.904q4.738-1.406 9.51-2.472l-4.316-14.56a32.267 32.267 0 0 0-3.912-57.394a25.27 25.27 0 0 0 .962-17.075l-6.457-21.733a25.24 25.24 0 0 0-7.244-11.55l13.63-18.036a25.2 25.2 0 0 0 4.842-11.517c.62 0 1.252.072 1.883.072h22.706a25.4 25.4 0 0 0 4.346-.382a25.2 25.2 0 0 0 7.513 12.138l16.807 15.12a25.28 25.28 0 0 0 16.94 6.48a25.6 25.6 0 0 0 6.002-.726c.062.228.124.445.197.673a25.43 25.43 0 0 0 24.103 17.51a25.5 25.5 0 0 0 7.906-1.273l21.576-7.047a25.42 25.42 0 0 0 17.447-22.022a25.5 25.5 0 0 0 6.56-.88a25.2 25.2 0 0 0 15.41-11.828l11.384-19.662a25.33 25.33 0 0 0 1.83-21.37A25.44 25.44 0 0 0 357.104 16.1M122.19 147.808l-6.457-21.732a8.745 8.745 0 0 1 7.027-11.207c.414 0 .828-.063 1.242-.114h.186a8.84 8.84 0 0 1 8.465 6.312l6.458 21.732a8.817 8.817 0 0 1-4.987 10.618q-.946.217-1.894.497l-.415.134a8.84 8.84 0 0 1-9.603-6.24zm19.23 21.308a15.875 15.875 0 1 1-5.465 1.035a26 26 0 0 0 1.914-.487l.796-.26a15.7 15.7 0 0 1 2.773-.288zm.237-92.382l-13.64 18.12a8.78 8.78 0 0 1-5.474 3.353c-.497 0-1.035.083-1.5.145a8.817 8.817 0 0 1-7.11-14.124l13.69-18.11a8.827 8.827 0 1 1 14.034 10.617zm50.594-23.036q-.61.89-1.148 1.81a8.8 8.8 0 0 1-6.8 3.21H161.64a8.827 8.827 0 1 1 0-17.645h22.704a8.807 8.807 0 0 1 7.948 12.625zm44.334 35.496a8.817 8.817 0 0 1-12.418.673l-16.89-15.16a8.83 8.83 0 0 1-2.07-10.35q.57-.828 1.036-1.697c.103-.125.196-.26.31-.384a8.84 8.84 0 0 1 12.42-.672l16.898 15.17a8.817 8.817 0 0 1 .766 12.42zm53.202 8.486a8.77 8.77 0 0 1-5.175 4.397l-21.493 7.058a8.827 8.827 0 1 1-5.484-16.775l21.587-7.048a8.827 8.827 0 0 1 10.607 12.377zm36.416-42.513L314.82 74.83A8.827 8.827 0 0 1 299.533 66l11.383-19.662a8.843 8.843 0 1 1 15.327 8.827z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-col gap-1">
                                            <h1 className="font-bold text-sm">New Hublot Ser-9</h1>
                                            <p className="font-thin text-sm">Target: $321,000</p>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={toggleDropdown}
                                            className="font-bold text-2xl cursor-pointer"
                                        >
                                            ...
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-[200px] bg-gray-100 border rounded-xl shadow-lg ">
                                                <ul className="py-1">
                                                    <li className=" flex px-4 justify-end"><button className=" font-bold  text-red-500 " onClick={() => { setDropdownOpen(false) }}>X</button></li>
                                                    <li className="px-4 py-2  cursor-pointer">
                                                        <div className="justify-center bg-purple-100 rounded-xl border border-1 border-gray-600 p-5 font-mono  text-purple-700">U are 79% away from your goal</div>
                                                    </li>
                                                    <li className="px-4 py-2  cursor-pointer">
                                                        <div className="flex justify-center bg-blue-100 rounded-xl hover:bg-blue-300 p-3 border border-gray-600   "><button className="">Delete Goal</button></div>
                                                    </li>

                                                </ul>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-base font-semibold text-gray-800">Saving: $70,063</p>
                                    <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                                        <div className="bg-red-400 h-2 rounded-full w-6/12"></div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>


                </div>

            </div >
            {showModal && <MyModal closeModal={closeModal} />}
        </>
    )
}

export default Body
