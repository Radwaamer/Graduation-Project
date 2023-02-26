<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Mail\Mycontact;
use Illuminate\Mail\Mailer;
use Illuminate\Support\Facades\Mail; #3333




class Contact extends Model
{
    use HasFactory;

    public $fillable = ['name', 'email', 'message'];

    /**
     * Write code on Method
     *
     * @return response()
     */
    public static function boot() {

        parent::boot();

        static::created(function ($item) {

            $adminEmail = "your_admin_email@gmail.com";
      Mail::to($adminEmail)->send(new Mycontact($item));
        });
    }
}
