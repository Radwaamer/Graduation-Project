<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\Mycontact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\View\View;
use Illuminate\Auth\Notifications\ResetPassword;
use App\User;



class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): View
    {
        return view('auth.forgot-password');
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
       $request->validate([
           'email' => ['required', 'email'],
        //    'password'=>['required','confirmed'],
       ]);

       // We will send the password reset link to this user. Once we have attempted
       // to send the link, we will examine the response then see the message we
       // need to show to the user. Finally, we'll send out a proper response.
    //    $credentials=['email'=>$request];
    //    $status = Password::sendResetLink($request->only('email'),function ($message) {
    //        //return $message;
    //    });
       $status = Password::sendResetLink(
           $request->only('email')
       );
       return $status == Password::RESET_LINK_SENT
                   ? back()->with('status', __($status))
                   : back()->withInput($request->only('email'))
                           ->withErrors(['email' => __($status)]);
    //        ini_set('max_execution_time', 180);

        $details = [
            'title' => 'secure@support.com',
            'body' => 'This is for testing email using smtp',
            'reason' =>'forgot-password'
        ];
        \Mail::to('hasnaamohammed538@gmail.com')->send(new Mycontact($details));
        dd("Email is Sent.");
    }

    
}
