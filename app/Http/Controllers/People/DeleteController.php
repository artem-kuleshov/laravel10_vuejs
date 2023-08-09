<?php

namespace App\Http\Controllers\People;

use App\Http\Controllers\Controller;
use App\Models\People;

class DeleteController extends Controller
{
   public function __invoke(People $person)
   {
       $person->delete();
       return response([]);
   }
}
