<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('createPost', [App\Http\Controllers\PostController::class, 'store' ]);
Route::get('posts', [App\Http\Controllers\PostController::class, 'index' ]);
Route::get('post/{id}', [App\Http\Controllers\PostController::class, 'show' ]);
Route::put('post/update/{id}', [App\Http\Controllers\PostController::class, 'update' ]);
Route::delete('post/delete/{id}', [App\Http\Controllers\PostController::class, 'destroy' ]);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
