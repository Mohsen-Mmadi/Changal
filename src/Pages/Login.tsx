

import { useModalStore } from '../Store';

 function LoginForm() {
  const { isOpen, type, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-md rounded-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-xl text-gray-600"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {type === 'login' ? 'ورود به حساب کاربری' : 'ثبت‌نام'}
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="ایمیل یا نام کاربری"
            className="border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="border px-3 py-2 rounded"
          />
          {type === 'register' && (
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="border px-3 py-2 rounded"
            />
          )}
          <button className="bg-orange-500 text-white py-2 rounded">
            {type === 'login' ? 'ورود' : 'ثبت‌نام'}
          </button>
        </form>
      </div>
    </div>
  );
}


export {LoginForm}