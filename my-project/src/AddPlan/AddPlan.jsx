import React, { useState } from 'react';
import Body from '../Components/Body';

const MyModal = ({ closeModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSavModalOpen, setIsSavModalOpen] = useState(false);

    // State for Transaction form
    const [transactionForm, setTransactionForm] = useState({
        transition: '',
        amount: '',
        type: '',
        status: 'credited'
    });

    // State for Saving Plan form
    const [savingPlanForm, setSavingPlanForm] = useState({
        title: '',
        amount: '',
        target: ''
    });

    // Handle input change for transaction form
    const handleTransactionChange = (e) => {
        const { name, value } = e.target;
        setTransactionForm({ ...transactionForm, [name]: value });
    };

    // Handle input change for saving plan form
    const handleSavingPlanChange = (e) => {
        const { name, value } = e.target;
        setSavingPlanForm({ ...savingPlanForm, [name]: value });
    };

    // Handle transaction form submission
    const handleTransactionSubmit = (e) => {
        e.preventDefault();
        console.log("Transaction Data: ", transactionForm);
        setIsModalOpen(false);
        closeModal();
    };

    // Handle saving plan form submission
    const handleSavingPlanSubmit = (e) => {
        e.preventDefault();
        console.log("Saving Plan Data: ", savingPlanForm);
        setIsSavModalOpen(false);
        closeModal();
    };

    return (
        <div className="relative">
            <div className={`${isModalOpen || isSavModalOpen ? 'blur-sm' : ''}`}>
                <Body />

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-[1273px] left-[936px] px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition z-10">
                    Add
                </button>

                <button
                    onClick={() => setIsSavModalOpen(true)}
                    className="absolute top-[270px] left-[1278px] px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition z-10">
                    Add plan
                </button>
            </div>

            {isModalOpen && (
                // Transaction Addition Form
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg min-w-screen mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
                        <form onSubmit={handleTransactionSubmit} className="space-y-4">
                            <div className="flex gap-4">
                                <div>
                                    <label htmlFor="transition" className="block text-sm font-medium text-gray-700">Transition</label>
                                    <input
                                        type="text"
                                        name="transition"
                                        id="transition"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter transition"
                                        value={transactionForm.transition}
                                        onChange={handleTransactionChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter amount"
                                        value={transactionForm.amount}
                                        onChange={handleTransactionChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter type"
                                    value={transactionForm.type}
                                    onChange={handleTransactionChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    name="status"
                                    id="status"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={transactionForm.status}
                                    onChange={handleTransactionChange}
                                >
                                    <option value="credited">Credited</option>
                                    <option value="debited">Debited</option>
                                </select>
                            </div>

                            <div className="flex gap-2 justify-end mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-purple-200 text-inherit border border-black rounded-lg hover:bg-purple-300 transition">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-100 text-inherit border border-gray-700 rounded-lg hover:bg-gray-300 transition">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isSavModalOpen && (
                // Saving Plan Form
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg min-w-screen mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Add New Saving Plan</h2>
                        <form onSubmit={handleSavingPlanSubmit} className="space-y-4">
                            <div className="flex gap-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter title"
                                        value={savingPlanForm.title}
                                        onChange={handleSavingPlanChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter Savings Amount"
                                        value={savingPlanForm.amount}
                                        onChange={handleSavingPlanChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="target" className="block text-sm font-medium text-gray-700">Target</label>
                                <input
                                    type="text"
                                    name="target"
                                    id="target"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter target"
                                    value={savingPlanForm.target}
                                    onChange={handleSavingPlanChange}
                                />
                            </div>

                            <div className="flex gap-2 justify-end mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-purple-200 text-inherit border border-black rounded-lg hover:bg-purple-300 transition">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsSavModalOpen(false)}
                                    className="px-4 py-2 bg-gray-100 text-inherit border border-gray-700 rounded-lg hover:bg-gray-300 transition">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyModal;
