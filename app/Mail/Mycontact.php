<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;



class Mycontact extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()

    {
        if(isset($this->data['reason']) && $this->data['reason'] =='forgot-password')
        {
            return $this->subject('Mail from secure@support.com')->view('auth.reset-password');
        }
        
        
         return $this->subject('Mail from secure@support.com')->view('mail');
        
       
        
        
    
       
      
            // ->view('contact');
    }
}


// public function __construct($details)
//     {
//         $this->data = $details;
//         var_dump($details);
//     }