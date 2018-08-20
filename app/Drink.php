<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
	/*
		Type: array
		What: defines the table columns that can be mass assigned
	*/
	protected $fillable = ['name', 'mg_of_caffeine_per_serving', 'servings_per'];
}

