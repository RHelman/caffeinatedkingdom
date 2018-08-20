<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$router->get('drinks', 'DrinksController@getAllDrinks');
$router->get('drinks/{id}', ['uses'=>'DrinksController@getDrink']);
$router->post('drinks', ['uses'=>'DrinksController@createDrink']);
$router->put('drinks/{id}', ['uses'=>'DrinksController@updateDrink']);
$router->delete('drinks/{id}', ['uses'=>'DrinksController@deleteDrink']);

$router->get('caffeineLevels', 'DrinksController@getAllCaffeineLevels');

