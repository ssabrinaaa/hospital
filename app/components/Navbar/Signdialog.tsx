import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Signin = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleLogin = async () => {
    try {
      // Fetch the WorkOS sign-in URL from the backend
      const response = await fetch('/api/login', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch the login URL');
      }
  
      const { url } = await response.json();
  
      if (!url) {
        throw new Error('No URL returned from API');
      }
  
      // Redirect to the WorkOS login page
      window.location.href = url;
    } catch (error) {
      console.error('Error fetching sign-in URL:', error);
    }
  };
  

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="text-lg text-Blueviolet font-medium"
            onClick={openModal}
          >
            Log In
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/assets/logo/logo.svg"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Sign in to your account
                        </h2>
                      </div>
                      <button
                        onClick={handleLogin}
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                          />
                        </span>
                        Log in with WorkOS
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signin;
