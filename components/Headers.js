import Link from 'next/link'

const Headers = () => {
    return (
        <header>
			<div className="row">
				<div className="col-md-3 top-info text-left mt-lg-4">
					<h6>Llamanos</h6>
					<ul>
						<li>
							<i className="fas fa-phone"></i> 351</li>
						<li className="number-phone mt-3"> 8128742</li>
					</ul>
				</div>
				<div className="col-md-6 logo-w3layouts text-center">
					<h1 className="logo-w3layouts">
						<span className="navbar-brand">
						<Link  href="/">
							instrumental</Link>
							</span>
					</h1>
				</div>

				<div className="col-md-3 top-info-cart text-right mt-lg-4">
					<ul className="cart-inner-info">
						{/* <li className="button-log">
							<a className="btn-open" href="#">
								<span className="fa fa-user" aria-hidden="true"></span>
							</a>
						</li> */}
						<li className="galssescart galssescart2 cart cart box_1">
							<form action="#" method="post" className="last">
								<input type="hidden" name="cmd" value="_cart"/>
								<input type="hidden" name="display" value="1"/>
								<button className="top_googles_cart" type="submit" name="submit" value="">
									Revisar
									<i className="fas fa-cart-arrow-down"></i>
								</button>
							</form>
						</li>
					</ul>

					

				</div>
			</div>
			<div className="search">
				<div className="mobile-nav-button">
					<button id="trigger-overlay" type="button">
						<i className="fas fa-search"></i>
					</button>
				</div>

				<div className="overlay overlay-door">
					<button type="button" className="overlay-close">
						<i className="fa fa-times" aria-hidden="true"></i>
					</button>
					<form action="#" method="post" className="d-flex">
						<input className="form-control" type="search" placeholder="Search here..." required=""/>
						<button type="submit" className="btn btn-primary submit">
							<i className="fas fa-search"></i>
						</button>
					</form>

				</div>

			</div>
			<label className="top-log mx-auto"></label>
			<nav className="navbar navbar-expand-lg navbar-light bg-light top-header mb-2">

				<button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				    aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
						
					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav nav-mega mx-auto">
						<li className="nav-item active">
							<Link href='/'>
							<span className="nav-link ml-lg-0" >Home
								<span className="sr-only">(current)</span>
							</span>
							</Link>
						</li>
						
						<li className="nav-item"> 
						<Link href='/about'>
							<span className="nav-link" >About</span>
						</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								Features
							</a>
							<ul className="dropdown-menu mega-menu ">
								<li>
									<div className="row">
										<div className="col-md-4 media-list span4 text-left">
											<h5 className="tittle-w3layouts-sub"> Tittle goes here </h5>
											<ul>
												<li className="media-mini mt-3">
													<a href="shop.html">Designer Glasses</a>
												</li>
												<li className="">
													<a href="shop.html"> Ray-Ban</a>
												</li>
												<li>
													<a href="shop.html">Prescription Glasses</a>
												</li>
												<li className="mt-3">
													<h5>View more pages</h5>
												</li>
												<li className="mt-2">
													<a href="about.html">About</a>
												</li>
												<li>
													<a href="customer.html">Customers</a>
												</li>
											</ul>
										</div>
										<div className="col-md-4 media-list span4 text-left">
											<h5 className="tittle-w3layouts-sub"> Tittle goes here </h5>
											<div className="media-mini mt-3">
												<a href="shop.html">
													{/* <img src="images/g2.jpg" className="img-fluid" alt=""/> */}
												</a>
											</div>
										</div>
										<div className="col-md-4 media-list span4 text-left">
											<h5 className="tittle-w3layouts-sub">Tittle goes here </h5>
											<div className="media-mini mt-3">
												<a href="shop.html">
													{/* <img src="images/g3.jpg" className="img-fluid" alt=""/> */}
												</a>
											</div>

										</div>
									</div>
									<hr/>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
							    aria-expanded="false">
								Shop
							</a>
							<ul className="dropdown-menu mega-menu ">
								<li>
									<div className="row">
										<div className="col-md-4 media-list span4 text-left">
											<h5 className="tittle-w3layouts-sub"> Tittle goes here </h5>
											<ul>
												<li className="media-mini mt-3">
													<a href="shop.html">Designer Glasses</a>
												</li>
												<li className="">
													<a href="shop.html"> Ray-Ban</a>
												</li>
												<li>
													<a href="shop.html">Prescription Glasses</a>
												</li>
												<li>
													<a href="shop.html">Rx Sunglasses</a>
												</li>
												<li>
													<a href="shop.html">Contact Lenses</a>
												</li>
												<li>
													<a href="shop.html">Multifocal Glasses</a>
												</li>
												<li>
													<a href="shop.html">Kids Glasses</a>
												</li>
												<li>
													<a href="shop.html">Lightweight Glasses</a>
												</li>
												<li>
													<a href="shop.html">Sports Glasses</a>
												</li>
											</ul>
										</div>
										<div className="col-md-4 media-list span4 text-left">
											<h5 className="tittle-w3layouts-sub"> Tittle goes here </h5>
											<ul>
												<li className="media-mini mt-3">

													<a href="shop.html">Brooks Brothers</a>
												</li>
												<li>
													<a href="shop.html">Persol</a>
												</li>
												<li>
													<a href="shop.html">Polo Ralph Lauren</a>
												</li>
												<li>
													<a href="shop.html">Prada</a>
												</li>
												<li>
													<a href="shop.html">Ray-Ban Jr</a>
												</li>
												<li>
													<a href="shop.html">Sferoflex</a>
												</li>
											</ul>
											<ul className="sub-in text-left">

												<li>
													<a href="shop.html">Polo Ralph Lauren</a>
												</li>
												<li>
													<a href="shop.html">Prada</a>
												</li>
												<li>
													<a href="shop.html">Ray-Ban Jr</a>
												</li>
											</ul>

										</div>
										<div className="col-md-4 media-list span4 text-left">

											<h5 className="tittle-w3layouts-sub-nav">Tittle goes here </h5>
											<div className="media-mini mt-3">
												<a href="shop.html">
													{/* <img src="images/g1.jpg" className="img-fluid" alt=""/> */}
												</a>
											</div>

										</div>
									</div>
									<hr/>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">Contact</a>
						</li>
					</ul>

				</div>
			</nav>
		</header>
    )
}

export default Headers
