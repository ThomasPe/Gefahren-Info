import { useState, useMemo } from 'react'
import { Search, AlertTriangle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import stoffeData from '@/data/UN-Nummern.json'
import type { Stoff } from '@/types/stoff'

const stoffe: Stoff[] = stoffeData

function App() {
  const [query, setQuery] = useState('')

  const filteredStoffe = useMemo(() => {
    if (!query.trim()) {
      return stoffe.slice(0, 50) // Show first 50 when no search
    }

    const searchTerm = query.toLowerCase().trim()
    
    return stoffe.filter((stoff) => {
      const unnummerMatch = stoff.unnummer.toString().includes(searchTerm)
      const gefahrnummerMatch = stoff.gefahrnummer.toLowerCase().includes(searchTerm)
      const bezeichnungMatch = stoff.bezeichnung.toLowerCase().includes(searchTerm)
      const klasseMatch = stoff.gefahrstoffklasse.toLowerCase().includes(searchTerm)
      
      return unnummerMatch || gefahrnummerMatch || bezeichnungMatch || klasseMatch
    }).slice(0, 100) // Limit results for performance
  }, [query])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-10 w-10 text-amber-500" />
            <h1 className="text-3xl font-bold text-foreground">
              Gefahren-Info
            </h1>
          </div>
          <p className="text-muted-foreground">
            UN-Nummern und Gefahrstoffklassen Suche
          </p>
        </header>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Stoffname, UN-Nummer, Gefahrennummer oder Klasse suchen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          {query.trim() 
            ? `${filteredStoffe.length} Ergebnis${filteredStoffe.length !== 1 ? 'se' : ''} gefunden`
            : `${stoffe.length} Stoffe insgesamt (zeige erste 50)`
          }
        </div>

        <div className="space-y-4">
          {filteredStoffe.map((stoff, index) => (
            <Card key={stoff.id || `${stoff.unnummer}-${index}`} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-tight">
                    {stoff.bezeichnung}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">
                    UN {stoff.unnummer}
                  </Badge>
                  {stoff.gefahrnummer && (
                    <Badge variant="secondary">
                      Gefahrnr. {stoff.gefahrnummer}
                    </Badge>
                  )}
                  {stoff.gefahrstoffklasse && (
                    <Badge variant="outline">
                      Klasse {stoff.gefahrstoffklasse}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredStoffe.length === 0 && query.trim() && (
            <div className="text-center py-12 text-muted-foreground">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Keine Stoffe gefunden</p>
              <p className="text-sm mt-2">Versuchen Sie einen anderen Suchbegriff</p>
            </div>
          )}
        </div>

        <footer className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Gefahren-Info – UN-Nummern Datenbank</p>
        </footer>
      </div>
    </div>
  )
}

export default App
