// DANE PRZYKŁADOWE — zastąp prawdziwymi danymi szkół przed publikacją
import type { School } from '@/types/school'

export const schools: School[] = [
  {
    id: 'sp-12-poznan',
    name: 'Szkoła Podstawowa nr 12',
    address: 'ul. Robocza 42',
    city: 'Poznań',
    latitude: 52.4064,
    longitude: 16.9252,
    scheduleNote: 'Środy 15:00–16:30',
    note: 'Wejście od strony boiska szkolnego.',
    isActive: true,
  },
  {
    id: 'sp-7-poznan',
    name: 'Szkoła Podstawowa nr 7',
    address: 'ul. Słowackiego 15',
    city: 'Poznań',
    latitude: 52.4082,
    longitude: 16.8976,
    scheduleNote: 'Wtorki 14:30–16:00',
    note: 'Zajęcia w sali komputerowej nr 2 na pierwszym piętrze.',
    isActive: true,
  },
  {
    id: 'sp-3-mosina',
    name: 'Szkoła Podstawowa nr 3',
    address: 'ul. Zielona 8',
    city: 'Mosina',
    latitude: 52.2423,
    longitude: 16.8497,
    scheduleNote: 'Czwartki 15:30–17:00',
    note: 'Proszę o kontakt z sekretariatem przed pierwszymi zajęciami.',
    isActive: true,
  },
  {
    id: 'sp-1-lubon',
    name: 'Szkoła Podstawowa nr 1',
    address: 'ul. Szkolna 5',
    city: 'Luboń',
    latitude: 52.3431,
    longitude: 16.8697,
    scheduleNote: 'Poniedziałki 14:00–15:30',
    note: 'Zapisy przez sekretariat szkoły.',
    isActive: true,
  },
  {
    id: 'sp-22-poznan',
    name: 'Szkoła Podstawowa nr 22',
    address: 'ul. Wyspiańskiego 30',
    city: 'Poznań',
    latitude: 52.3942,
    longitude: 16.9432,
    scheduleNote: 'Piątki 14:00–15:30',
    note: 'Grupy dla klas 4–6 i osobno dla klas 1–3.',
    isActive: true,
  },
  {
    id: 'sp-5-swarzedz',
    name: 'Szkoła Podstawowa nr 5',
    address: 'ul. Kościuszki 11',
    city: 'Swarzędz',
    latitude: 52.4073,
    longitude: 17.0719,
    scheduleNote: 'Środy 14:30–16:00',
    note: 'Dojazd autobusem linii 902 z Poznania.',
    isActive: true,
  },
]

export function getSchools(): School[] {
  return schools
}

export function getSchoolById(id: string): School | undefined {
  return schools.find((s) => s.id === id)
}
