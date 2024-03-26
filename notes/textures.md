# Textures
Textures are images that will cover the surface of your geometries. Many types of textures can have different effects on the appearance of your geometry.

### Color (or albedo)
The albedo texture is the most simple one. It'll only take the pixels of the texture and apply them to the geometry.

### Alpha
The alpha texture is a grayscale image where white will be visible, and black won't.

### Height
The height texture is a grayscale image that will move the vertices to create some relief. You'll need to add subdivision if you want to see it.

### Normal
The normal texture will add small details. It won't move the vertices, but it will lure the light into thinking that the face is oriented differently. Normal textures are very useful to add details with good performance because you don't need to subdivide the geometry.

### Ambient occlusion
The ambient occlusion texture is a grayscale image that will fake shadow in the surface's crevices. While it's not physically accurate, it certainly helps to create contrast.

### Metalness
The metalness texture is a grayscale image that will specify which part is metallic (white) and non-metallic (black). This information will help to create reflection.

### Roughness
The roughness is a grayscale image that comes with metalness, and that will specify which part is rough (white) and which part is smooth (black). This information will help to dissipate the light. A carpet is very rugged, and you won't see the light reflection on it, while the water's surface is very smooth, and you can see the light reflecting on it. Here, the wood is uniform because there is a clear coat on it.

### PBR
Those textures (especially the metalness and the roughness) follow what we call PBR principles. PBR stands for Physically Based Rendering. It regroups many techniques that tend to follow real-life directions to get realistic results.

While there are many other techniques, PBR is becoming the standard for realistic renders, and many software, engines, and libraries are using it.
