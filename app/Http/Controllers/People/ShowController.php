<?php

namespace App\Http\Controllers\People;

use App\Http\Controllers\Controller;
use App\Http\Resources\People\PeopleResource;
use App\Models\People;

class ShowController extends Controller
{
   public function __invoke(People $person)
   {
       return new PeopleResource($person);
   }
}
