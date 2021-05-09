
const Banner = () => {
    return (
        <div className="banner">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<div className="carousel-caption text-center">
							<h3>Instrumental Quirúrgico
								<span>Todos los Productos</span>
							</h3>
							<a href="#" className="btn btn-sm animated-button gibson-three mt-4">Tienda</a>
						</div>
					</div>
					<div className="carousel-item item2">
						<div className="carousel-caption text-center">
							<h3>Calidad y Precio
								<span>Lo que necesites al menor costo</span>
							</h3>
							<a href="#" className="btn btn-sm animated-button gibson-three mt-4">Tienda</a>

						</div>
					</div>
					<div className="carousel-item item3">
						<div className="carousel-caption text-center">
							<h3>Necesitas Ayuda?
								<span>Consultanos</span>
							</h3>
							<a href="#" className="btn btn-sm animated-button gibson-three mt-4">Contacto</a>

						</div>
					</div>
					<div className="carousel-item item4">
						<div className="carousel-caption text-center">
							<h3>Calidad Asegurada
								<span>Entra en Nustra Tienda</span>
							</h3>
							<a href="#" className="btn btn-sm animated-button gibson-three mt-4">Tienda</a>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Anterior</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Siguiente</span>
				</a>
			</div>
		</div>

    )
}

export default Banner
