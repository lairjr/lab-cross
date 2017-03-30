elm-reactor: 
	docker run -p 0.0.0.0:8000:8000 -v /vagrant:/webapp -t -i --rm elm-image elm-reactor -a 0.0.0.0

elm-bash:
	docker run -t -i --rm elm-image /bin/bash
