<?php

namespace App\Http\Controllers\People;

use App\Http\Controllers\Controller;
use App\Http\Resources\People\PeopleResource;
use App\Models\People;

class IndexController extends Controller
{
   public function __invoke()
   {
       return PeopleResource::collection(People::all());
   }
}
