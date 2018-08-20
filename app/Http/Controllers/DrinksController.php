<?php

namespace App\Http\Controllers;

use App\CaffeineLevel;
use App\Drink;
use Illuminate\Http\Request;

use Log;

class DrinksController extends Controller
{
	//Returns a json holding all of the drinks records
	public function getAllDrinks()
	{
        try
        {
            return response()->json(Drink::orderby('name', 'ASC')->get());
        }
        catch (\Exception $e)
        {
            Log::info($e->getMessage());
            return response()->json(['error'=>'An Unexpected Error Occurred'], 500);
        }
	}

	public function getDrink($id, Request $request)
	{
        
        if ($drink = Drink::find($id))
        {
		  return response()->json($drink);
        }

        return response()->json(['error'=>'Record Not Found'], 400);
	}

	public function createDrink(Request $request)
    {
    	//Lets make sure we have been sent valid data.
    	//We are requiring all fields be sent.
    	$this->validate($request,
    		[
    			'name' => 'required|string',
    			'mg_of_caffeine_per_serving' => 'required|integer', 
    			'servings_per' => 'required|integer'
    		]

    	);

        try
        {
            $drink = Drink::create($request->all());
            return response()->json($drink, 201);
        }
        catch (\Exception $e)
        {
            Log::info($e->getMessage());
            return response()->json(['message'=>'Please Validate Your Data'], 400);
        }
    }

    public function updateDrink($id, Request $request)
    {
    	//Lets make sure we have been sent valid data
    	//We are able to update on a per field basis so we dont require any of them, but are just going to validate type
    	$this->validate($request,
    		[
    			'name' => 'string',
    			'mg_of_caffeine_per_serving' => 'integer', 
    			'servings_per' => 'integer'
    		]

    	);

        $drink = Drink::findOrFail($id);
        $drink->update($request->all());

        return response()->json($drink, 200);
    }

    public function deleteDrink($id)
    {
        $drink = Drink::findOrFail($id);

        $drink->deleted = true;
        if ($drink->save())
        {
        	return response('Deleted Successfully', 200);
    	}
    }

    public function getAllCaffeineLevels()
    {
        try
        {
            return response()->json(CaffeineLevel::select('id','name', 'milligrams')->orderby('milligrams', 'ASC')->get());
        }
        catch (\Exception $e)
        {
            Log::info($e->getMessage());
            return response()->json(['error'=>'An Unexpected Error Occurred'], 500);
        }
    }
}
