<?php

namespace App\Http\Controllers\People;

use App\Http\Controllers\Controller;
use App\Models\People;

class IndexController extends Controller
{
   public function __invoke()
   {
       return People::all();
   }
}
