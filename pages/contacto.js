

const contacto = () => {
    return (
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
		<div className="container">
			<h3 className="tittle-w3layouts text-center my-lg-4 my-4">Contacto</h3>
			<div className="inner_sec">
				<p className="sub text-center mb-lg-5 mb-3">Nos Encanta oir tus IDEAS</p>
				<div className="address row">

					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-3 address-left text-center">
								<i className="far fa-map"></i>
							</div>
							<div className="col-md-9 address-right text-left">
								<h6>Dirección</h6>
								<p> Villa Allende, Cordoba

								</p>
							</div>
						</div>

					</div>
					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-3 address-left text-center">
								<i className="far fa-envelope"></i>
							</div>
							<div className="col-md-9 address-right text-left">
								<h6>Email</h6>
								<p>layerba@gmail.com
									<a href="mailto:example@email.com"> .</a> 
                                    {/*Averiguar oara poner link y linkiar al mail*/ }
								</p>
							</div>

						</div>
					</div>
					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-3 address-left text-center">
								<i className="fas fa-mobile-alt"></i>
							</div>
							<div className="col-md-9 address-right text-left">
								<h6>Telefono</h6>
								<p>351 812 8742</p>

							</div>

						</div>
					</div>
				</div>
				<div className="contact_grid_right">
					<form action="#" method="post">
						<div className="row contact_left_grid">
							<div className="col-md-6 con-left">
								<div className="form-group">
									<label className="my-2">Nombre</label>
									<input className="form-control" type="text" name="Name" placeholder="" required=""/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input className="form-control" type="email" name="Email" placeholder="" required=""/>
								</div>
								<div className="form-group">
									<label className="my-2">Telefono</label>
									<input className="form-control" type="text" name="Subject" placeholder="" required=""/>
								</div>
							</div>
							<div className="col-md-6 con-right">
								<div className="form-group">
									<label>Mensaje</label>
									<textarea id="textarea" placeholder="" required=""></textarea>
								</div>
								<input className="form-control" type="submit" value="Enviar"/>

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    )
}

export default contacto
