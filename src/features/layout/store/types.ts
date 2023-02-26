type Zoom = 0 | 50 | 100

export interface Settings {
  zoom: Zoom
}

export default interface Layout {
  settings: Settings
}
