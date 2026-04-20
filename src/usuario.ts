interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  activo: boolean;
}


class UsuarioService {
  private usuarios: Usuario[] = [];

  
  crear(usuario: Usuario): void {
    
    if (this.usuarios.some(u => u.id === usuario.id)) {
      console.log("❌ Ya existe un usuario con ese ID");
      return;
    }

    this.usuarios.push(usuario);
    console.log("✅ Usuario creado:", usuario.nombre);
  }

  
  desactivar(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);

    if (!usuario) {
      console.log("❌ Usuario no encontrado");
      return;
    }

    usuario.activo = false;
    console.log("⚠️ Usuario desactivado:", usuario.nombre);
  }

  
  listarActivos(): Usuario[] {
    return this.usuarios.filter(u => u.activo);
  }
}



const servicio = new UsuarioService();


servicio.crear({ id: 1, nombre: "Juan", correo: "juan@gmail.com", activo: true });
servicio.crear({ id: 2, nombre: "Maria", correo: "maria@gmail.com", activo: true });
servicio.crear({ id: 3, nombre: "Carlos", correo: "carlos@gmail.com", activo: true });


servicio.crear({ id: 1, nombre: "Pedro", correo: "pedro@gmail.com", activo: true });


console.log("\n🟢 Usuarios activos:");
console.log(servicio.listarActivos());


servicio.desactivar(2);


console.log("\n🟢 Usuarios activos después de desactivar:");
console.log(servicio.listarActivos());