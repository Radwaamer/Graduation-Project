<h3>search results</h3>

    <form action="{{url('searchlabs')}}" method="get">

        <input type="text" value="{{$keyword}}" name="keyword" id="">
        <br>
        <button type="submit">search</button>
        {{$keyword}}