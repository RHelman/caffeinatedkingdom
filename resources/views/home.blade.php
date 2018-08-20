@extends ('layout')

@section('title')
	Caffeinated Kingdom
@stop

@section('content')
	<div class="hero-image">
		<div class="hero-text">
		    <p>Caffeine Kingdom</p>
		    <p class="hero-text-small">Keep Track of Your Get Up And Go </p>
		</div>

	</div>	

	<div class="container">
		<div class="row">
			<div class="col-md-12  horizontally-center-contents">
				<h1>Caffeine Checkup</h1>
			</div>


			<div class="col-md-12">
        		<div id="caffeineControl"></div>
        	</div>
		</div>
	</div>

	<!-- Load React. -->


  <!-- Load our React component. -->
  <script type="text/jsx" src="/js/component/CaffeineTracker.js"></script>
@stop