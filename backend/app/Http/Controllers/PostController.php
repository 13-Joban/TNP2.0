<?php
 
namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
 
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $posts = Post::orderBy('updated_at', 'desc')->get();
        return response()->json([
            'status' => '200',
            'Posts' => $posts
        ], 200);
 
    }
 
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $post = new Post;
        $post->type = $request->type;
        $post->title = $request->title;
        $post->content = $request->content;
     
        $post->save();
        return response()->json([
            'status' => 200,
            'message' => ' Post Successfully stored'
 
        ], 200);
    }
 
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $post = Post::find($id);
        if($post){
            return response()->json([
                'status' => '200',
                'Post' => $post
            ], 200);
        }
        else{
            return response()->json([
                'status' => '404',
                'message' =>'Not found'
            ], 404);
        }
    }
 
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
 
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $post = Post::find($id);
        if($post){
        $post->type = $request->type;
        $post->title = $request->title;
        $post->content = $request->content;
       
        $post->update();
 
            return response()->json([
                'status' => '200',
                'Post' => $post
            ], 200);
        }
        else{
            return response()->json([
                'status' => '404',
                'message' =>'Not found'
            ], 404);
        }
    }
 
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $post = Post::find($id);
        if($post){
            $post->delete();
            return response()->json([
                'status' => '200',
                'message' =>'Deleted'
            ], 200);
        }
        else{
            return response()->json([
                'status' => '404',
                'message' =>'Not found'
            ], 404);
        }
    }
}
