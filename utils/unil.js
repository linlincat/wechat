// 使用方式 
// promist(wx.request)({url: '', ...})

const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (error) => {
          reject(error);
        },
      });
      // func == wx.request
      func(args);
    });
  };
};

export { promisic };
