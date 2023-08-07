<?php

namespace App\Http\Controllers\People;

use App\Http\Controllers\Controller;
use App\Http\Requests\People\Request;
use App\Models\People;

class UpdateController extends Controller
{
   public function __invoke(Request $request, People $person)
   {
       $data = $request->validated();
       return $person->update($data);
   }
}
