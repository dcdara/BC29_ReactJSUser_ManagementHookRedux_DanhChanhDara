const DEFAULT_STATE = {
  userList: [
  
    {
      id: 1,
      userName: 'nva',
      fullName: 'Nguyễn Văn A',
      email: 'ngvanA@gmail.com',
      passWord: "123",
      phoneNumber: '0123456789',
      type: "Client",
    },
    {
      id: 2,
      userName: 'nvb',
      fullName: 'Nguyễn Văn B',
      email: 'ngvanB@gmail.com',
      passWord: "123",
      phoneNumber: '0123456789',
      type: "Admin",
    },
  ],
  selectedUser: null,
};
export const userReducers = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "ADD_USER": {
      const data = [...state.userList];
      data.push({ ...payload, id: Date.now() });
      state.userList = data; // push xong phai lưu lại giá trị mới
      return { ...state };
    }
    case "UPDATE_USER": {
      const data = [...state.userList];
      const indx = data.findIndex((ele) => ele.id === payload.id);
      if (indx !== -1) {
        data[indx] = payload;
      }
      state.selectedUser = null;
      state.userList = data;
      return { ...state };
    }
    case "SELECT_EDIT_USER": {
      state.selectedUser = payload;
      return { ...state };
    }
    case "DELETED_USER": {
      const data = [...state.userList];
      const indx = data.findIndex((ele) => ele.id === payload.id);
      if (indx !== -1) {
        data.splice(indx, 1);
        
      }
      state.userList = data;
      return { ...state };
    }
    default:
      return state;
  }
};
