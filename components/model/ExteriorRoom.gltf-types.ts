// Types for GLTF nodes/materials for the exterior model
import { Mesh, Material } from "three";

export interface ExteriorGLTFResult {
    nodes: {
        american_house_MARK_2_Main_0: Mesh;
        american_house_MARK_2_Glass_0: Mesh;
        american_house_MARK_2_Objects_0: Mesh;
        american_house_MARK_2_Decal_0: Mesh;
    };
    materials: {
        Main: Material;
        Glass: Material;
        Objects: Material;
        Decal: Material;
    };
}
