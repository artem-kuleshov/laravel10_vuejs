<?php

namespace App\Http\Controllers\People;

use App\Http\Controllers\Controller;
use App\Http\Requests\People\Request;
use App\Models\People;

class StoreController extends Controller
{
   public function __invoke(Request $request)
   {
       $data = $request->validated();
       return People::create($data);
   }
}
