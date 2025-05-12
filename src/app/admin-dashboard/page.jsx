"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AcademyLogo from "../../Assets/Outlook-4n2yii3h (1).gif";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { FiEdit, FiTrash2, FiSave, FiX, FiPlus } from "react-icons/fi";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // بيانات الملفات المتاحة
  const allFiles = [
    "Project_Plan.pdf",
    "Financial_Report.xlsx",
    "Client_List.csv",
    "Meeting_Notes.docx",
    "Product_Specs.pdf",
    "User_Guide.pdf",
    "Budget_2023.xlsx",
  ];

  const initialData = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      email: "ahmed@example.com",
      password: "ahmed123",
      files: [
        { name: "Project_Plan.pdf", hasAccess: true },
        { name: "Financial_Report.xlsx", hasAccess: false },
      ],
    },
    {
      id: 2,
      name: "Mona Ali",
      email: "mona@example.com",
      password: "mona456",
      files: [
        { name: "Client_List.csv", hasAccess: true },
        { name: "Meeting_Notes.docx", hasAccess: true },
      ],
    },
  ];

  const [users, setUsers] = useState(initialData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  // const [newUser, setNewUser] = useState({
  //   id: Math.max(0, ...users.map((u) => u.id)) + 1,
  //   name: "",
  //   email: "",
  //   password: "",
  //   files: [], // سيتم إضافة الملفات المختارة فقط
  // });

  // فتح مودال إضافة مستخدم جديد
  // const openAddModal = () => {
  //   setNewUser({
  //     id: Math.max(0, ...users.map((u) => u.id)) + 1,
  //     name: "",
  //     email: "",
  //     password: "",
  //     files: [], // نبدأ بمصفوفة فارغة
  //   });
  //   setIsAddModalOpen(true);
  // };

  // إضافة مستخدم جديد
  const addUser = () => {
    // نضمن أن لدينا على الأقل ملف واحد (مسموح أو مرفوض)
    if (newUser.files.length === 0) {
      Swal.fire(
        "Warning!",
        "Please select at least one file access permission.",
        "warning"
      );
      return;
    }

    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    Swal.fire("Added!", "New user has been added successfully.", "success");
  };

  // عند اختيار ملف في مودال الإضافة
  const handleFileSelection = (fileName, hasAccess) => {
    setNewUser((prev) => {
      // نتحقق إذا كان الملف موجود بالفعل
      const existingFileIndex = prev.files.findIndex(
        (f) => f.name === fileName
      );

      if (existingFileIndex >= 0) {
        // إذا كان الملف موجود، نحدث حالة الـ Access فقط
        const updatedFiles = [...prev.files];
        updatedFiles[existingFileIndex].hasAccess = hasAccess;
        return { ...prev, files: updatedFiles };
      } else {
        // إذا كان الملف غير موجود، نضيفه جديدًا
        return {
          ...prev,
          files: [...prev.files, { name: fileName, hasAccess }],
        };
      }
    });
  };

  // فتح مودال التعديل
  // const openEditModal = (user) => {
  //   setCurrentUser(user);
  //   setEditedUser({ ...user });
  //   setIsEditModalOpen(true);
  // };

  // حذف المستخدم
  // const deleteUser = (userId) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setUsers(users.filter((user) => user.id !== userId));
  //       Swal.fire("Deleted!", "User has been deleted.", "success");
  //     }
  //   });
  // };

  // تغيير صلاحية الوصول للملف
  // const handleAccessChange = (userId, fileName) => {
  //   setUsers(
  //     users.map((user) => {
  //       if (user.id === userId) {
  //         return {
  //           ...user,
  //           files: user.files.map((file) =>
  //             file.name === fileName
  //               ? { ...file, hasAccess: !file.hasAccess }
  //               : file
  //           ),
  //         };
  //       }
  //       return user;
  //     })
  //   );
  // };

  // حفظ التعديلات
  // const saveChanges = () => {
  //   setUsers(
  //     users.map((user) => (user.id === editedUser.id ? editedUser : user))
  //   );
  //   setIsEditModalOpen(false);
  //   Swal.fire("Updated!", "User data has been updated.", "success");
  // };

  // معالجة تغيير الحقول في مودال التعديل
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditedUser({
  //     ...editedUser,
  //     [name]: value,
  //   });
  // };

  // معالجة تغيير الحقول في مودال الإضافة
  // const handleNewUserInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewUser({
  //     ...newUser,
  //     [name]: value,
  //   });
  // };
  // ================================================================
  // ================================================================
  // ================================================================

  // Sample data
  const initialEmployees = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      links: ["/dashboard", "/reports", "/settings"],
    },
    {
      id: 2,
      name: "Mariam Ali",
      links: ["/dashboard"],
    },
  ];

  // State management with unique names
  const [employees, setEmployees] = useState(initialEmployees);
  const [isEditLinksModalOpen, setIsEditLinksModalOpen] = useState(false);
  const [isAddLinksModalOpen, setIsAddLinksModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    links: [""],
  });

  // Open edit modal
  const openEditModal = (employee) => {
    setCurrentEmployee({ ...employee });
    setIsEditLinksModalOpen(true);
  };

  // Open add modal
  const openAddModal = () => {
    setNewEmployee({
      name: "",
      links: [""],
    });
    setIsAddLinksModalOpen(true);
  };

  // Close modals
  const closeModals = () => {
    setIsEditLinksModalOpen(false);
    setIsAddLinksModalOpen(false);
  };

  // Handle input changes for edit modal
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle link changes for edit modal
  const handleEditLinkChange = (index, value) => {
    const updatedLinks = [...currentEmployee.links];
    updatedLinks[index] = value;
    setCurrentEmployee((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  };

  // Add new link field in edit modal
  const addEditLinkField = () => {
    setCurrentEmployee((prev) => ({
      ...prev,
      links: [...prev.links, ""],
    }));
  };

  // Remove link field in edit modal
  const removeEditLinkField = (index) => {
    const updatedLinks = currentEmployee.links.filter((_, i) => i !== index);
    setCurrentEmployee((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  };

  // Handle input changes for add modal
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle link changes for add modal
  const handleAddLinkChange = (index, value) => {
    const updatedLinks = [...newEmployee.links];
    updatedLinks[index] = value;
    setNewEmployee((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  };

  // Add new link field in add modal
  const addNewLinkField = () => {
    setNewEmployee((prev) => ({
      ...prev,
      links: [...prev.links, ""],
    }));
  };

  // Remove link field in add modal
  const removeNewLinkField = (index) => {
    const updatedLinks = newEmployee.links.filter((_, i) => i !== index);
    setNewEmployee((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  };

  // Save edited employee
  const saveChanges = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === currentEmployee.id ? currentEmployee : emp
      )
    );
    closeModals();
    Swal.fire("Updated!", "Employee access has been updated.", "success");
  };

  // Add new employee
  const addEmployee = () => {
    const newEmp = {
      id: employees.length + 1,
      name: newEmployee.name,
      links: newEmployee.links.filter((link) => link.trim() !== ""),
    };
    setEmployees([...employees, newEmp]);
    closeModals();
    Swal.fire("Added!", "New employee has been added.", "success");
  };

  // Delete employee
  const deleteEmployee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEmployees(employees.filter((emp) => emp.id !== id));
        Swal.fire("Deleted!", "User and Links have been deleted.", "success");
      }
    });
  };
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Tab content
  const tabContent = {
    Home: (
      <div className="py-6">
        <h2 className="text-2xl text-Royal-Green  font-bold mb-4">
          Employee-related files
        </h2>

        <div className="py-4">
          <div className="overflow-x-auto">
            <div className="bg-white rounded-lg shadow overflow-hidden min-w-max">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Password
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Files Access
                    </th>
                    {/* <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.password}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="space-y-2">
                          {user.files.map((file, i) => (
                            <div key={i} className="flex items-center">
                              {/* <input
                                type="checkbox"
                                checked={file.hasAccess}
                                onChange={() =>
                                  handleAccessChange(user.id, file.name)
                                }
                                className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                              /> */}
                              <span className="ml-2">
                                {file.name}
                                {/* <span
                                  className={`ml-2 ${
                                    file.hasAccess
                                      ? "text-green-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  ({file.hasAccess ? "Allowed" : "Denied"})
                                </span> */}
                              </span>
                            </div>
                          ))}
                        </div>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openEditModal(user)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <FiEdit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td> */}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* زر إضافة مستخدم جديد */}
          {/* <div className="mt-4 flex justify-end">
            <button
              onClick={openAddModal}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FiPlus className="mr-2 h-4 w-4" />
              Add New User
            </button>
          </div> */}

          {/* مودال التعديل */}
          {/* {isEditModalOpen && (
            <div className="fixed inset-0 bg-Wadi bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
              <div className="bg-white  shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Edit User
                  </h3>
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={editedUser.password}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Files Access
                    </label>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">
                        Select Files:
                      </h4>
                      <div className="space-y-2">
                        {allFiles.map((file, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between"
                          >
                            <span>{file}</span>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name={`file-${i}`}
                                  onChange={() =>
                                    handleFileSelection(file, true)
                                  }
                                  className="form-radio h-4 w-4 text-green-600"
                                />
                                <span className="ml-2 text-green-600">
                                  Allow
                                </span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name={`file-${i}`}
                                  onChange={() =>
                                    handleFileSelection(file, false)
                                  }
                                  className="form-radio h-4 w-4 text-red-600"
                                />
                                <span className="ml-2 text-red-600">Deny</span>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {newUser.files.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">
                          Selected Files:
                        </h4>
                        <div className="space-y-2">
                          {newUser.files.map((file, i) => (
                            <div key={i} className="flex items-center">
                              <span
                                className={`mr-2 ${
                                  file.hasAccess
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {file.hasAccess ? "✓" : "✗"}
                              </span>
                              <span>{file.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end space-x-3 px-6 py-4 border-t">
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveChanges}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FiSave className="inline mr-2 h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )} */}

          {/* مودال الإضافة */}
          {/* {isAddModalOpen && (
            <div className="fixed inset-0 bg-Wadi bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
              <div className="bg-white  shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b px-6 py-4 sticky top-0 bg-white z-10">
                  <h3 className="text-lg font-medium text-gray-900">
                    Add New User
                  </h3>
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newUser.name}
                      onChange={handleNewUserInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={newUser.email}
                      onChange={handleNewUserInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={newUser.password}
                      onChange={handleNewUserInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Files Access
                    </label>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">
                        Select Files:
                      </h4>
                      <div className="space-y-2">
                        {allFiles.map((file, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between"
                          >
                            <span>{file}</span>
                            <div className="flex space-x-4">
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name={`file-${i}`}
                                  onChange={() =>
                                    handleFileSelection(file, true)
                                  }
                                  className="form-radio h-4 w-4 text-green-600"
                                />
                                <span className="ml-2 text-green-600">
                                  Allow
                                </span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name={`file-${i}`}
                                  onChange={() =>
                                    handleFileSelection(file, false)
                                  }
                                  className="form-radio h-4 w-4 text-red-600"
                                />
                                <span className="ml-2 text-red-600">Deny</span>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {newUser.files.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">
                          Selected Files:
                        </h4>
                        <div className="space-y-2">
                          {newUser.files.map((file, i) => (
                            <div key={i} className="flex items-center">
                              <span
                                className={`mr-2 ${
                                  file.hasAccess
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {file.hasAccess ? "✓" : "✗"}
                              </span>
                              <span>{file.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end space-x-3 px-6 py-4 border-t sticky bottom-0 bg-white">
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addUser}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FiPlus className="inline mr-2 h-4 w-4" />
                    Add User
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
        <h2 className="text-2xl text-Royal-Green font-bold mb-4 mt-8">
          Employee Access Management
        </h2>

        <div className="py-4">
          <div className="overflow-x-auto">
            <div className="bg-white rounded-lg shadow overflow-hidden min-w-max">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Employee Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Access Links
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {employees.map((employee, index) => (
                    <motion.tr
                      key={employee.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {employee.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="space-y-2">
                          {employee.links.map((link, i) => (
                            <div key={i} className="flex items-center">
                              <span className="ml-2">{link}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openEditModal(employee)}
                            className="text-blue-600 hover:text-blue-900 cursor-pointer"
                          >
                            <FiEdit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => deleteEmployee(employee.id)}
                            className="text-red-600 hover:text-red-900 cursor-pointer"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add New Employee Button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={openAddModal}
              className="flex cursor-pointer items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FiPlus className="mr-2 h-4 w-4" />
              Add New Employee
            </button>
          </div>

          {/* Edit Modal - Updated to use new state names */}
          {isEditLinksModalOpen && (
            <div className="fixed inset-0 bg-Wadi bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Edit Employee Access
                  </h3>
                  <button
                    onClick={closeModals}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Employee Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={currentEmployee.name}
                      onChange={handleEditChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Access Links
                    </label>
                    <div className="mt-4 space-y-2">
                      {currentEmployee.links.map((link, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            value={link}
                            onChange={(e) =>
                              handleEditLinkChange(index, e.target.value)
                            }
                            className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-grow"
                          />
                          <button
                            onClick={() => removeEditLinkField(index)}
                            className="ml-2 text-red-600 hover:text-red-800 cursor-pointer"
                          >
                            <FiX className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addEditLinkField}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center cursor-pointer"
                    >
                      <FiPlus className="mr-1" />
                      Add New Link
                    </button>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 px-6 py-4 border-t">
                  <button
                    onClick={closeModals}
                    className="px-4 py-2 border cursor-pointer border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveChanges}
                    className="px-4 py-2 border cursor-pointer border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
                  >
                    <FiSave className="mr-2 h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add Modal - Updated to use new state names */}
          {isAddLinksModalOpen && (
            <div className="fixed inset-0 bg-Wadi bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Add New Employee
                  </h3>
                  <button
                    onClick={closeModals}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Employee Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newEmployee.name}
                      onChange={handleAddChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Access Links
                    </label>
                    <div className="mt-4 space-y-2">
                      {newEmployee.links.map((link, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            value={link}
                            onChange={(e) =>
                              handleAddLinkChange(index, e.target.value)
                            }
                            placeholder="/example"
                            className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-grow"
                          />
                          <button
                            onClick={() => removeNewLinkField(index)}
                            className="ml-2 text-red-600 hover:text-red-800 cursor-pointer"
                          >
                            <FiX className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addNewLinkField}
                      className="mt-2 text-sm cursor-pointer text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <FiPlus className="mr-1" />
                      Add New Link
                    </button>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 px-6 py-4 border-t">
                  <button
                    onClick={closeModals}
                    className="px-4 py-2 border cursor-pointer border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addEmployee}
                    className="px-4 py-2 border cursor-pointer border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
                  >
                    <FiPlus className="mr-2 h-4 w-4" />
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    Users: (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((user) => (
                <motion.tr
                  key={user}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: user * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    User {user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    user{user}@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user === 1 ? "Admin" : "User"}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
    Files: (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">File Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((file) => (
            <motion.div
              key={file}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">File {file}</h3>
                  <p className="text-sm text-gray-500">2.{file} MB</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    Orders: (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Order Management</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((order) => (
            <motion.div
              key={order}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: order * 0.1 }}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Order #{order}</h3>
                  <p className="text-sm text-gray-500">
                    Status:{" "}
                    {order === 1
                      ? "Completed"
                      : order === 2
                      ? "Processing"
                      : "Cancelled"}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  ${order * 100}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex justify-between w-full">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <Link href="/admin-dashboard">
                  <Image
                    width={150}
                    height={64}
                    src={AcademyLogo}
                    alt="Site Logo"
                  />
                </Link>
              </div>
              {/* Horizontal Menu */}
              <div className="relative flex flex-1 items-center justify-end">
                {/* القائمة الأساسية للشاشات الكبيرة */}
                <div className="hidden  h-full sm:ml-6 sm:flex sm:space-x-8">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`${
                        activeTab === tab
                          ? "border-Royal-Green text-Royal-Green"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* زر التوجيه للشاشات الصغيرة */}
                <div className="sm:hidden h-full ">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex cursor-pointer h-full items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                  >
                    {mobileMenuOpen ? (
                      // أيقونة الإغلاق (X)
                      <svg
                        className="h-full w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      // أيقونة القائمة (Hamburger)
                      <svg
                        className="h-full w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* القائمة المنسدلة للشاشات الصغيرة */}
                {mobileMenuOpen && (
                  <div className="sm:hidden absolute top-full w-fit right-0 bg-Wadi shadow-lg z-50">
                    <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
                      {Object.keys(tabContent).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => {
                            setActiveTab(tab);
                            setMobileMenuOpen(false);
                          }}
                          className={`${
                            activeTab === tab
                              ? "bg-Sky-Blue text-white"
                              : "text-gray-600 hover:bg-gray-100"
                          } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-100">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-Royal-Green"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
