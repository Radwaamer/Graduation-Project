<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>labs</title>
</head>
<body>
    <button href="{{url('searchlabs')}}"><a href="{{url('searchlabs')}}">access lab</a></button>
   
    @foreach ($labs as $lab )
    
    <a href="{{url('labs')}}"></a>
    <h1>{{$lab->name}}</h1>
    <p>{{$lab->descriptin}}<p>
    <p>{{$lab->solution}}</p>
    <!-- <video src="asset('uploads/ved1')">{{$lab->video}}</video> -->
    <video width="320" height="240" controls>
     <source src="asset('uploads/ved1.webm')" type="video/mp4">
        Your browser does not support the video tag.
       </video>
  
            <p>{{$lab->how}}</p>
     @endforeach
</body>
</html>
//  <video src="{{$lab->video}}">{{$lab->video}}</video>