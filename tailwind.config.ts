import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary-foreground))',
              },
            },
            h1: {
              color: '#ffffff',
              fontWeight: '800',
            },
            h2: {
              color: '#ffffff',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            h3: {
              color: '#ffffff',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h4: {
              color: '#ffffff',
              fontWeight: '600',
            },
            blockquote: {
              color: '#ffffff',
              borderLeftColor: 'hsl(var(--primary))',
            },
            strong: {
              color: '#ffffff',
            },
            code: {
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            hr: {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            ul: {
              li: {
                '&::marker': {
                  color: 'hsl(var(--primary))',
                },
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: 'hsl(var(--primary))',
                },
              },
            },
            table: {
              thead: {
                borderBottomColor: 'rgba(255, 255, 255, 0.2)',
                th: {
                  color: '#ffffff',
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
            },
          },
        },
        // Varianta pro tmavý režim není potřeba, protože výchozí je již tmavá
        // Můžete přidat variantu pro světlý režim, pokud budete potřebovat
        light: {
          css: {
            color: '#374151', // gray-700
            a: {
              color: 'hsl(var(--primary))',
            },
            h1: {
              color: '#111827', // gray-900
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            blockquote: {
              color: '#1f2937', // gray-800
              borderLeftColor: 'hsl(var(--primary))',
            },
            strong: {
              color: '#111827',
            },
            code: {
              color: '#111827',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            },
            hr: {
              borderColor: 'rgba(0, 0, 0, 0.1)',
            },
            ul: {
              li: {
                '&::marker': {
                  color: 'hsl(var(--primary))',
                },
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: 'hsl(var(--primary))',
                },
              },
            },
            table: {
              thead: {
                borderBottomColor: 'rgba(0, 0, 0, 0.2)',
                th: {
                  color: '#111827',
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: 'rgba(0, 0, 0, 0.1)',
                },
              },
            },
          },
        },
      },
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
// Compare this snippet from app/components/navbar.tsx: