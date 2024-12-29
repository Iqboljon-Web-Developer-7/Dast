import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  
  const Learn = () => {
    return (
      <>
        <AlertDialog>
          <AlertDialogTrigger>
          <p className="!text-sm text-secondary-grey-600">learn about us</p>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogDescription>
                <div className="max-w-4xl mx-auto py-8 px-4 overflow-y-auto max-h-96">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    User Documentation: Sign-Up and Sign-In Process
                  </h1>
                  <p className="text-gray-700 mb-6">
                    This guide explains how users can create an account (sign up)
                    and log in (sign in) to the platform.
                  </p>
  
                  <hr className="my-6" />
  
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sign-Up Process
                  </h2>
  
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    How to Create an Account
                  </h3>
  
                  <ol className="list-decimal list-inside text-gray-700 mb-6">
                    <li className="mb-2">
                      <strong>Navigate to the Sign-Up Page</strong>: On the
                      platform’s homepage, click the <strong>Sign Up</strong>{" "}
                      button or link.
                    </li>
                    <li className="mb-2">
                      <strong>Fill in Your Details</strong>:
                      <ul className="list-disc list-inside ml-4">
                        <li>
                          <strong>Full Name</strong>: Your first and last name.
                        </li>
                        <li>
                          <strong>Email Address</strong>: A valid email address to
                          be associated with your account.
                        </li>
                        <li>
                          <strong>Password</strong>: Create a strong password that
                          meets the following criteria:
                          <ul className="list-disc list-inside ml-6">
                            <li>At least 8 characters.</li>
                            <li>
                              Includes one uppercase letter, one lowercase letter,
                              one number, and one special character.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Confirm Password</strong>: Retype your password
                          to confirm.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Agree to Terms and Conditions</strong>: Check the
                      box to confirm you agree to the platform’s Terms of Service
                      and Privacy Policy.
                    </li>
                    <li>
                      <strong>Complete the Registration</strong>: Click the{" "}
                      <strong>Sign Up</strong> button. If email verification is
                      required, check your email inbox for a confirmation email
                      and follow the instructions to verify your account.
                    </li>
                  </ol>
  
                  <hr className="my-6" />
  
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Sign-In Process
                  </h2>
  
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    How to Log In to Your Account
                  </h3>
  
                  <ol className="list-decimal list-inside text-gray-700 mb-6">
                    <li className="mb-2">
                      <strong>Navigate to the Sign-In Page</strong>: On the
                      platform’s homepage, click the <strong>Sign In</strong>{" "}
                      button or link.
                    </li>
                    <li className="mb-2">
                      <strong>Enter Your Login Credentials</strong>:
                      <ul className="list-disc list-inside ml-4">
                        <li>
                          <strong>Email Address</strong>: Enter the email address
                          used during sign-up.
                        </li>
                        <li>
                          <strong>Password</strong>: Enter your account password.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Optional: Stay Logged In</strong>: Check the
                      “Remember Me” option to remain signed in on your device.
                    </li>
                    <li>
                      <strong>Access Your Account</strong>: Click the{" "}
                      <strong>Sign In</strong> button to log in.
                    </li>
                  </ol>
  
                  <hr className="my-6" />
  
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Troubleshooting Common Issues
                  </h2>
  
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Forgot Password
                  </h3>
                  <ol className="list-decimal list-inside text-gray-700 mb-6">
                    <li>
                      On the Sign-In page, click <strong>Forgot Password?</strong>
                      .
                    </li>
                    <li>Enter your registered email address.</li>
                    <li>Check your email for a password reset link.</li>
                    <li>
                      Follow the instructions to create a new password and regain
                      access.
                    </li>
                  </ol>
  
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Incorrect Password
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Double-check your password for typos. If unsure, use the{" "}
                    <strong>Forgot Password</strong> option to reset it.
                  </p>
  
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Email Not Verified
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Check your email inbox (and spam folder) for the verification
                    email. If not found, request a new verification email on the
                    Sign-Up page.
                  </p>
  
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Account Locked
                  </h3>
                  <p className="text-gray-700">
                    If your account is locked due to multiple failed login
                    attempts, wait for a specified time to try again.
                  </p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Got it</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  };
  
  export default Learn;
  