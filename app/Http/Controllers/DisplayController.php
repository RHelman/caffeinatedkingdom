<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

use Log;

if (session_status() == PHP_SESSION_NONE) 
{
    session_start();
}

class DisplayController extends Controller
{
	public function home()
	{
		return view('home', 
			[

            ]);
	}
}